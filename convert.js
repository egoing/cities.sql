var fs = require('fs');
var raw = fs.readFileSync('cities.json');
var faker = require('faker');
var SqlString = require('sqlstring');
var json = JSON.parse(raw);
const file = fs.createWriteStream('./cities.sql');
var sql = `DROP TABLE IF EXISTS place;
CREATE TABLE place (
  id int(11) NOT NULL,
  city varchar(68) DEFAULT NULL,
  description text,
  location point NOT NULL
) ENGINE=InnoDB;
`;
file.write(sql);
for(var i=0; i<json.length; i++){
    var d = json[i];
    var name = SqlString.escape(d.name);
    var desc = SqlString.escape(`${d.name} is ${faker.lorem.sentence()}`);
    file.write(`INSERT INTO place (city, description, location) VALUES(${name}, ${desc}, POINT(${d.lng}, ${d.lat}));\n`);
}
file.end();
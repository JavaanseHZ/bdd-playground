CREATE TABLE reports (
  id SERIAL NOT NULL PRIMARY KEY,
  ts timestamp without time zone NOT NULL DEFAULT (current_timestamp),
  buildid TEXT,
  reporttype TEXT,
  report BYTEA
);

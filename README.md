DSN Parser
==========

Supports MySQL (`mysql:`) and Postgresql (`pgsql:`) schemes.

DSNs are a scheme, followed by semicolon (`;`), or, for command-line
convenience, colon-separated (`:`) parameters in the form of `key=value`.

Valid parameters are `host`, `port`, `dbname`, `user` and `password`, and additionally `username` is accepted as a synonym for `user`.

All parameters are set as properties on the DSN object, except `dbname` is exposed as `database`.

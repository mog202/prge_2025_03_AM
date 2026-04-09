create table users
(
    name     text,
    posts    integer,
    id       smallserial
        constraint users_pk
            primary key,
    geom     geometry,
    location text
);

alter table users
    owner to mapservice;


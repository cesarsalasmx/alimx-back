USE testing_ali_fullstack;

CREATE TABLE IF NOT EXISTS users_test_cesarsalas (
    id int auto_increment,
    nombre varchar(100),
    segundo_nombre varchar(100),
    apellido_paterno varchar(100),
    apellido_materno varchar(100),
    fecha_nacimiento varchar(100),
    email varchar(100),
    telefono varchar(100),
    primary key(id)
);

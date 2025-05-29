use EVENTOS_FP_FEE;
-- INSERT PERFILES
insert into perfiles values(1,'ADMON'), (2,'CLIENTE');
insert into perfiles values(3, 'CLIENTE');

-- INSERT USUARIOS 
insert into usuarios values
(1, 'ramon@fp.com', '12345', 'Ramon', 'Santaolaya Lopez',1,  '2024-03-15', 1),
(2, 'eva@fp.com', '12345', 'Eva', 'Goma Papel',1,  '2025-01-15', 2),
(3, 'carlos@fp.com', '12144', 'Carlos', 'Panadero Estupendo', 1, '2025-03-15', 2),
(4, 'sara@fp.com','1321', 'Sara', 'pastelera', 1, '2025-04-12', 2);

-- INSERT TIPOS
insert into tipos values
(1, 'Bodas', 'Todo tipo de religiones') , 
(2, 'Bautizos', 'Todo tipo de religiones') , 
(3, 'Graduaciones', 'Cursos 6ºPrimaria, 4ºESO, 2ºBachiller y universidades'),
(4, 'Cumpleaños', 'Para todas las edades'),
(5, 'Fiestas privadas', 'Todo tipo de eventos privados');

-- Insert eventos
insert into eventos values 
(1, 'Boda catolica', 'Bodas de oro', '2025-04-05', 'DIAS', 3, 'Madrid', 200, 'ACTIVO', 'S', 170, 1 , '2025-06-07'),
(2, 'Bautizos', 'Bautizos de dos mellizos', '2025-03-11', 'DIAS', 1, 'Toledo', 300, 'TERMINADO', 'S', 230, 2 , '2025-03-01'),
(3, 'Graduaciones', 'Graduacion de segundo de bachillerato', '2025-01-07', 'DIAS', 5, 'Madrid', 500, 'ACTIVO', 'S', 350, 3 , '2025-06-07'),
(4, 'Cumpleaños', 'Cumpleañera de 15 años', '2025-04-12', 'DIAS', 2, 'Palencia', 600, 'CANCELADO', 'N', 600, 4 , '2026-02-01'),
(5, 'Fiestas privadas', 'Despedida de soltero', '2025-03-06', 'DIAS', 7, 'Madrid', 150, 'ACTIVO', 'N', 800, 5 , '2025-01-08'),
(6, 'Boda civil', 'Celebración en jardín', '2025-05-20', 'DIAS', 2, 'Segovia', 180, 'TERMINADO', 'S', 190, 1, '2025-06-01'),
(7, 'Bautizo familiar', 'Bautizo íntimo en capilla', '2025-06-15', 'DIAS', 1, 'Cuenca', 80, 'ACTIVO', 'N', 100, 2, '2025-05-30'),
(8, 'Graduación universitaria', 'Graduación de ingeniería', '2025-07-01', 'DIAS', 3, 'Zaragoza', 400, 'CANCELADO', 'S', 450, 3, '2025-06-10'),
(9, 'Cumpleaños infantil', 'Fiesta temática para niños', '2025-08-10', 'DIAS', 1, 'Valladolid', 120, 'ACTIVO', 'N', 130, 4, '2025-07-25'),
(10, 'Fiesta privada', 'Aniversario de empresa', '2025-09-05', 'DIAS', 2, 'Salamanca', 300, 'ACTIVO', 'N', 320, 5, '2025-08-20'),
-- 10 mas
(11, 'Boda en la finca', 'Ceremonia campestre con cena al aire libre', '2025-06-15', 'DIAS', 2, 'Valladolid', 220, 'ACTIVO', 'N', 280, 1, '2025-05-01'),
(12, 'Bautizo en iglesia', 'Bautizo con almuerzo familiar', '2025-06-18', 'DIAS', 1, 'León', 150, 'ACTIVO', 'N', 150, 2, '2025-05-02'),
(13, 'Graduación ESO', 'Fiesta de graduación 4º ESO', '2025-06-20', 'DIAS', 1, 'Madrid', 400, 'ACTIVO', 'S', 300, 3, '2025-05-03'),
(14, 'Cumpleaños sorpresa', 'Fiesta sorpresa para adulto', '2025-06-25', 'DIAS', 1, 'Sevilla', 180, 'ACTIVO', 'N', 160, 4, '2025-05-04'),
(15, 'Fiesta privada temática', 'Fiesta temática años 80', '2025-06-28', 'DIAS', 2, 'Madrid', 200, 'ACTIVO', 'S', 350, 5, '2025-05-05'),
(16, 'Boda civil íntima', 'Boda civil para pocos invitados', '2025-07-02', 'DIAS', 1, 'Toledo', 50, 'ACTIVO', 'N', 210, 1, '2025-05-06'),
(17, 'Bautizo en casa', 'Bautizo privado en residencia', '2025-07-04', 'DIAS', 1, 'Zaragoza', 70, 'ACTIVO', 'N', 120, 2, '2025-05-07'),
(18, 'Graduación Universidad', 'Graduación con fiesta posterior', '2025-07-10', 'DIAS', 3, 'Barcelona', 500, 'ACTIVO', 'S', 480, 3, '2025-05-08'),
(19, 'Cumpleaños infantil 10 años', 'Fiesta con juegos y animación', '2025-07-15', 'DIAS', 1, 'Madrid', 150, 'ACTIVO', 'N', 140, 4, '2025-05-09'),
(20, 'Fiesta privada aniversario', 'Aniversario de empresa con cena', '2025-07-20', 'DIAS', 2, 'Bilbao', 250, 'ACTIVO', 'N', 380, 5, '2025-05-10');

-- INSERTS EN RESERVAS
INSERT INTO RESERVAS (ID_RESERVA, ID_USUARIO, ID_EVENTO, PRECIO_VENTA, OBSERVACIONES, CANTIDAD) VALUES
-- cantidad de tickets para cada personam ejemplo: aforo maximo -> 150 cantidad(tickets/persona) -> 50
(1, 1, 1, 170, 'Reserva para dos personas', 2),
(2, 2, 2, 230, 'Asistencia confirmada', 1),
(3, 3, 3, 350, 'Reserva familiar', 4),
(4, 4, 4, 600, 'Cancelada por el cliente', 1),
(5, 3, 11, 280, 'Reserva para boda en la finca', 3);

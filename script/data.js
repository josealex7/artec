const productos = [{
    "id": 1,
    "name": "Smartphone Galaxy Z Flip",
    "image": "images/galaxy-z-flip.jpg",
    "precio": "4800000",
    "categoria": "smartphones",
    "descripcion": "Un smartphone plegable con una pantalla de vidrio ultra delgado. Disfruta de un diseño compacto que cabe fácilmente en tu bolsillo, combinado con un rendimiento de alta gama y una experiencia fotográfica versátil."
},
{
    "id": 2,
    "name": "MacBook Air M2",
    "image": "images/macbook-air.jpg",
    "precio": "5200000",
    "categoria": "laptops",
    "descripcion": "La MacBook Air M2 redefine la portabilidad con un diseño delgado y ligero, una batería de larga duración y un rendimiento sin precedentes gracias al chip M2 de Apple."
},
{
    "id": 3,
    "name": "Auriculares Bose 700",
    "image": "images/bose-700.jpg",
    "precio": "550000",
    "categoria": "laptops",
    "descripcion": "Auriculares con cancelación de ruido activa y un diseño elegante. Ofrecen un sonido inmersivo, controles táctiles intuitivos y una excelente duración de batería para escuchar durante todo el día."
},
{
    "id": 4,
    "name": "Reloj Inteligente Garmin Fenix 7",
    "image": "images/garmin-fenix-7.jpg",
    "precio": "600000",
    "categoria": "laptops",
    "descripcion": "Un reloj deportivo de alta gama con GPS integrado, mapas topográficos, monitor de salud avanzado y hasta 18 días de duración de batería en modo smartwatch."
},
{
    "id": 5,
    "name": "Cámara Sony Alpha A7 IV",
    "image": "images/sony-alpha-a7.jpg",
    "precio": "3000000",
    "categoria": "smartphones",
    "descripcion": "Cámara mirrorless de fotograma completo con capacidad de grabación en 4K, enfoque automático de alta precisión y un sensor CMOS de 33 MP para capturar imágenes excepcionales."
},
{
    "id": 6,
    "name": "Monitor Dell UltraSharp 32",
    "image": "images/dell-ultrasharp.jpg",
    "precio": "800000",
    "categoria": "otros",
    "descripcion": "Un monitor 4K UHD con colores precisos y bordes ultradelgados, ideal para profesionales creativos y tareas que requieren alta resolución."
},
{
    "id": 7,
    "name": "Teclado Mecánico Logitech G915",
    "image": "images/logitech-g915.jpg",
    "precio": "650000",
    "categoria": "otros",
    "descripcion": "Teclado mecánico inalámbrico ultradelgado con switches de alta velocidad, iluminación RGB personalizable y una duración de batería excepcional."
},
{
    "id": 8,
    "name": "Router Asus ROG Rapture",
    "image": "images/asus-rog-rapture.jpg",
    "precio": "700000",
    "categoria": "otros",
    "descripcion": "Un router gamer de alto rendimiento con soporte para Wi-Fi 6, múltiples antenas y un diseño optimizado para minimizar la latencia y maximizar la velocidad."
},
{
    "id": 9,
    "name": "Tablet iPad Pro 11",
    "image": "images/ipad-pro.jpg",
    "precio": "5000000",
    "categoria": "consoles",
    "descripcion": "Con la potencia del chip M2, pantalla Liquid Retina y compatibilidad con Apple Pencil, esta tablet está diseñada para creatividad, productividad y entretenimiento."
},
{
    "id": 10,
    "name": "Consola PlayStation 5",
    "image": "images/playstation-5.jpg",
    "precio": "3800000",
    "categoria": "consoles",
    "descripcion": "La consola de nueva generación de Sony, con gráficos realistas, velocidad de carga ultrarrápida y una amplia biblioteca de juegos exclusivos."
},
{
    "id": 11,
    "name": "Smartphone Galaxy Z Flip",
    "image": "images/galaxy-z-flip.jpg",
    "precio": "4800000",
    "categoria": "smartphones",
    "descripcion": "Un smartphone plegable con una pantalla de vidrio ultra delgado. Disfruta de un diseño compacto que cabe fácilmente en tu bolsillo, combinado con un rendimiento de alta gama y una experiencia fotográfica versátil."
},
{
    "id": 12,
    "name": "MacBook Air M2",
    "image": "images/macbook-air.jpg",
    "precio": "5200000",
    "categoria": "laptops",
    "descripcion": "La MacBook Air M2 redefine la portabilidad con un diseño delgado y ligero, una batería de larga duración y un rendimiento sin precedentes gracias al chip M2 de Apple."
},
{
    "id": 13,
    "name": "Auriculares Bose 700",
    "image": "images/bose-700.jpg",
    "precio": "550000",
    "categoria": "laptops",
    "descripcion": "Auriculares con cancelación de ruido activa y un diseño elegante. Ofrecen un sonido inmersivo, controles táctiles intuitivos y una excelente duración de batería para escuchar durante todo el día."
},
{
    "id": 14,
    "name": "Reloj Inteligente Garmin Fenix 7",
    "image": "images/garmin-fenix-7.jpg",
    "precio": "600000",
    "categoria": "laptops",
    "descripcion": "Un reloj deportivo de alta gama con GPS integrado, mapas topográficos, monitor de salud avanzado y hasta 18 días de duración de batería en modo smartwatch."
},
{
    "id": 15,
    "name": "Cámara Sony Alpha A7 IV",
    "image": "images/sony-alpha-a7.jpg",
    "precio": "3000000",
    "categoria": "smartphones",
    "descripcion": "Cámara mirrorless de fotograma completo con capacidad de grabación en 4K, enfoque automático de alta precisión y un sensor CMOS de 33 MP para capturar imágenes excepcionales."
},
{
    "id": 16,
    "name": "Monitor Dell UltraSharp 32",
    "image": "images/dell-ultrasharp.jpg",
    "precio": "800000",
    "categoria": "otros",
    "descripcion": "Un monitor 4K UHD con colores precisos y bordes ultradelgados, ideal para profesionales creativos y tareas que requieren alta resolución."
},
{
    "id": 17,
    "name": "Teclado Mecánico Logitech G915",
    "image": "images/logitech-g915.jpg",
    "precio": "650000",
    "categoria": "otros",
    "descripcion": "Teclado mecánico inalámbrico ultradelgado con switches de alta velocidad, iluminación RGB personalizable y una duración de batería excepcional."
},
{
    "id": 18,
    "name": "Router Asus ROG Rapture",
    "image": "images/asus-rog-rapture.jpg",
    "precio": "700000",
    "categoria": "otros",
    "descripcion": "Un router gamer de alto rendimiento con soporte para Wi-Fi 6, múltiples antenas y un diseño optimizado para minimizar la latencia y maximizar la velocidad."
},
{
    "id": 19,
    "name": "Tablet iPad Pro 11",
    "image": "images/ipad-pro.jpg",
    "precio": "5000000",
    "categoria": "consoles",
    "descripcion": "Con la potencia del chip M2, pantalla Liquid Retina y compatibilidad con Apple Pencil, esta tablet está diseñada para creatividad, productividad y entretenimiento."
},
{
    "id": 20,
    "name": "Consola PlayStation 5",
    "image": "images/playstation-5.jpg",
    "precio": "3800000",
    "categoria": "consoles",
    "descripcion": "La consola de nueva generación de Sony, con gráficos realistas, velocidad de carga ultrarrápida y una amplia biblioteca de juegos exclusivos."
},
{
    "id": 21,
    "name": "Smartphone Galaxy Z Flip",
    "image": "images/galaxy-z-flip.jpg",
    "precio": "4800000",
    "categoria": "smartphones",
    "descripcion": "Un smartphone plegable con una pantalla de vidrio ultra delgado. Disfruta de un diseño compacto que cabe fácilmente en tu bolsillo, combinado con un rendimiento de alta gama y una experiencia fotográfica versátil."
},
{
    "id": 22,
    "name": "MacBook Air M2",
    "image": "images/macbook-air.jpg",
    "precio": "5200000",
    "categoria": "laptops",
    "descripcion": "La MacBook Air M2 redefine la portabilidad con un diseño delgado y ligero, una batería de larga duración y un rendimiento sin precedentes gracias al chip M2 de Apple."
},
{
    "id": 23,
    "name": "Auriculares Bose 700",
    "image": "images/bose-700.jpg",
    "precio": "550000",
    "categoria": "laptops",
    "descripcion": "Auriculares con cancelación de ruido activa y un diseño elegante. Ofrecen un sonido inmersivo, controles táctiles intuitivos y una excelente duración de batería para escuchar durante todo el día."
},
{
    "id": 24,
    "name": "Reloj Inteligente Garmin Fenix 7",
    "image": "images/garmin-fenix-7.jpg",
    "precio": "600000",
    "categoria": "laptops",
    "descripcion": "Un reloj deportivo de alta gama con GPS integrado, mapas topográficos, monitor de salud avanzado y hasta 18 días de duración de batería en modo smartwatch."
},
{
    "id": 25,
    "name": "Cámara Sony Alpha A7 IV",
    "image": "images/sony-alpha-a7.jpg",
    "precio": "3000000",
    "categoria": "smartphones",
    "descripcion": "Cámara mirrorless de fotograma completo con capacidad de grabación en 4K, enfoque automático de alta precisión y un sensor CMOS de 33 MP para capturar imágenes excepcionales."
},
{
    "id": 26,
    "name": "Monitor Dell UltraSharp 32",
    "image": "images/dell-ultrasharp.jpg",
    "precio": "800000",
    "categoria": "otros",
    "descripcion": "Un monitor 4K UHD con colores precisos y bordes ultradelgados, ideal para profesionales creativos y tareas que requieren alta resolución."
},
{
    "id": 27,
    "name": "Teclado Mecánico Logitech G915",
    "image": "images/logitech-g915.jpg",
    "precio": "650000",
    "categoria": "otros",
    "descripcion": "Teclado mecánico inalámbrico ultradelgado con switches de alta velocidad, iluminación RGB personalizable y una duración de batería excepcional."
},
{
    "id": 28,
    "name": "Router Asus ROG Rapture",
    "image": "images/asus-rog-rapture.jpg",
    "precio": "700000",
    "categoria": "otros",
    "descripcion": "Un router gamer de alto rendimiento con soporte para Wi-Fi 6, múltiples antenas y un diseño optimizado para minimizar la latencia y maximizar la velocidad."
},
{
    "id": 29,
    "name": "Tablet iPad Pro 11",
    "image": "images/ipad-pro.jpg",
    "precio": "5000000",
    "categoria": "consoles",
    "descripcion": "Con la potencia del chip M2, pantalla Liquid Retina y compatibilidad con Apple Pencil, esta tablet está diseñada para creatividad, productividad y entretenimiento."
},
{
    "id": 30,
    "name": "Consola PlayStation 5",
    "image": "images/playstation-5.jpg",
    "precio": "3800000",
    "categoria": "consoles",
    "descripcion": "La consola de nueva generación de Sony, con gráficos realistas, velocidad de carga ultrarrápida y una amplia biblioteca de juegos exclusivos."
},
{
    "id": 41,
    "name": "Smartphone Galaxy Z Flip",
    "image": "images/galaxy-z-flip.jpg",
    "precio": "4800000",
    "categoria": "smartphones",
    "descripcion": "Un smartphone plegable con una pantalla de vidrio ultra delgado. Disfruta de un diseño compacto que cabe fácilmente en tu bolsillo, combinado con un rendimiento de alta gama y una experiencia fotográfica versátil."
},
{
    "id": 42,
    "name": "MacBook Air M2",
    "image": "images/macbook-air.jpg",
    "precio": "5200000",
    "categoria": "laptops",
    "descripcion": "La MacBook Air M2 redefine la portabilidad con un diseño delgado y ligero, una batería de larga duración y un rendimiento sin precedentes gracias al chip M2 de Apple."
},
{
    "id": 43,
    "name": "Auriculares Bose 700",
    "image": "images/bose-700.jpg",
    "precio": "550000",
    "categoria": "laptops",
    "descripcion": "Auriculares con cancelación de ruido activa y un diseño elegante. Ofrecen un sonido inmersivo, controles táctiles intuitivos y una excelente duración de batería para escuchar durante todo el día."
},
{
    "id": 44,
    "name": "Reloj Inteligente Garmin Fenix 7",
    "image": "images/garmin-fenix-7.jpg",
    "precio": "600000",
    "categoria": "laptops",
    "descripcion": "Un reloj deportivo de alta gama con GPS integrado, mapas topográficos, monitor de salud avanzado y hasta 18 días de duración de batería en modo smartwatch."
},
{
    "id": 45,
    "name": "Cámara Sony Alpha A7 IV",
    "image": "images/sony-alpha-a7.jpg",
    "precio": "3000000",
    "categoria": "smartphones",
    "descripcion": "Cámara mirrorless de fotograma completo con capacidad de grabación en 4K, enfoque automático de alta precisión y un sensor CMOS de 33 MP para capturar imágenes excepcionales."
},
{
    "id": 46,
    "name": "Monitor Dell UltraSharp 32",
    "image": "images/dell-ultrasharp.jpg",
    "precio": "800000",
    "categoria": "otros",
    "descripcion": "Un monitor 4K UHD con colores precisos y bordes ultradelgados, ideal para profesionales creativos y tareas que requieren alta resolución."
},
{
    "id": 47,
    "name": "Teclado Mecánico Logitech G915",
    "image": "images/logitech-g915.jpg",
    "precio": "650000",
    "categoria": "otros",
    "descripcion": "Teclado mecánico inalámbrico ultradelgado con switches de alta velocidad, iluminación RGB personalizable y una duración de batería excepcional."
},
{
    "id": 48,
    "name": "Router Asus ROG Rapture",
    "image": "images/asus-rog-rapture.jpg",
    "precio": "700000",
    "categoria": "otros",
    "descripcion": "Un router gamer de alto rendimiento con soporte para Wi-Fi 6, múltiples antenas y un diseño optimizado para minimizar la latencia y maximizar la velocidad."
},
{
    "id": 49,
    "name": "Tablet iPad Pro 11",
    "image": "images/ipad-pro.jpg",
    "precio": "5000000",
    "categoria": "consoles",
    "descripcion": "Con la potencia del chip M2, pantalla Liquid Retina y compatibilidad con Apple Pencil, esta tablet está diseñada para creatividad, productividad y entretenimiento."
},
{
    "id": 50,
    "name": "Consola PlayStation 5",
    "image": "images/playstation-5.jpg",
    "precio": "3800000",
    "categoria": "consoles",
    "descripcion": "La consola de nueva generación de Sony, con gráficos realistas, velocidad de carga ultrarrápida y una amplia biblioteca de juegos exclusivos."
}
];
export default productos;
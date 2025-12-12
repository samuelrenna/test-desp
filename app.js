
        // Base de datos de preguntas COMPLETAS (100 preguntas)
const questions = [
    // BLOQUE 1: REDES Y PROTOCOLOS (1-20)
    {
        id: 1,
        block: 1,
        difficulty: 'low',
        text: "¿Qué significa las siglas DNS?",
        options: [
            "Domain Network System",
            "Domain Name System",
            "Data Network Service",
            "Digital Name Server"
        ],
        correct: 1,
        explanation: "DNS significa Domain Name System. Es el sistema que traduce nombres de dominio a direcciones IP."
    },
    {
        id: 2,
        block: 1,
        difficulty: 'low',
        text: "¿Cuál es el puerto estándar para el protocolo SSH?",
        options: ["21", "22", "23", "25"],
        correct: 1,
        explanation: "El puerto 22 está reservado para SSH (Secure Shell), usado para conexiones seguras a servidores."
    },
    {
        id: 3,
        block: 1,
        difficulty: 'low',
        text: "¿Qué protocolo se utiliza para transferir archivos de forma no segura (texto plano)?",
        options: ["SFTP", "SSH", "FTP", "HTTPS"],
        correct: 2,
        explanation: "FTP (File Transfer Protocol) transfiere archivos sin encriptación, a diferencia de SFTP que es seguro."
    },
    {
        id: 4,
        block: 1,
        difficulty: 'low',
        text: "¿Qué capa del modelo OSI se encarga del direccionamiento lógico (IP)?",
        options: [
            "Capa 1 (Física)",
            "Capa 2 (Enlace)",
            "Capa 3 (Red)",
            "Capa 4 (Transporte)"
        ],
        correct: 2,
        explanation: "La capa 3 (Red) maneja el direccionamiento lógico y el enrutamiento de paquetes."
    },
    {
        id: 5,
        block: 1,
        difficulty: 'low',
        text: "¿Qué registro DNS asocia un nombre de dominio a una dirección IPv4?",
        options: ["AAAA", "CNAME", "MX", "A"],
        correct: 3,
        explanation: "El registro A (Address) mapea un nombre de dominio a una dirección IPv4. AAAA es para IPv6."
    },
    {
        id: 6,
        block: 1,
        difficulty: 'medium',
        text: "¿Qué comando se utiliza en Linux para consultar registros DNS detallados?",
        options: ["ping", "dig", "tracert", "netstat"],
        correct: 1,
        explanation: "El comando 'dig' (Domain Information Groper) es una herramienta avanzada para consultas DNS."
    },
    {
        id: 7,
        block: 1,
        difficulty: 'medium',
        text: "¿Cuál es la diferencia principal entre TCP y UDP?",
        options: [
            "TCP es más rápido, UDP es más seguro.",
            "UDP es orientado a conexión, TCP no.",
            "TCP garantiza la entrega de paquetes (fiable), UDP no.",
            "No hay diferencia, solo cambia el puerto."
        ],
        correct: 2,
        explanation: "TCP es orientado a conexión y fiable, UDP es sin conexión y no garantiza la entrega."
    },
    {
        id: 8,
        block: 1,
        difficulty: 'medium',
        text: "Si quiero que www.miweb.com sea un alias de miweb.com, ¿qué registro uso?",
        options: ["A", "NS", "CNAME", "TXT"],
        correct: 2,
        explanation: "CNAME (Canonical Name) crea un alias, apuntando a otro nombre de dominio."
    },
    {
        id: 9,
        block: 1,
        difficulty: 'medium',
        text: "El puerto 443 está reservado para:",
        options: ["HTTP", "HTTPS", "MySQL", "DNS"],
        correct: 1,
        explanation: "El puerto 443 es el estándar para HTTPS (HTTP Seguro)."
    },
    {
        id: 10,
        block: 1,
        difficulty: 'medium',
        text: "¿Qué archivo en Linux resuelve nombres de dominio localmente antes de consultar al DNS?",
        options: ["/etc/network", "/etc/hosts", "/etc/resolv.conf", "/etc/dns"],
        correct: 1,
        explanation: "/etc/hosts permite mapear IPs a nombres localmente antes de consultar DNS externo."
    },
    {
        id: 11,
        block: 1,
        difficulty: 'high',
        text: "En una conexión FTP Pasiva, ¿quién decide qué puerto se usará para la transmisión de datos?",
        options: ["El Cliente", "El Servidor", "El Router", "El Firewall"],
        correct: 0,
        explanation: "En FTP Pasivo, el SERVIDOR abre un puerto y le dice al cliente cuál usar para datos."
    },
    {
        id: 12,
        block: 1,
        difficulty: 'high',
        text: "¿Qué registro DNS es imprescindible para recibir correos electrónicos en tu dominio?",
        options: ["SOA", "PTR", "MX", "TXT"],
        correct: 2,
        explanation: "El registro MX (Mail Exchange) especifica los servidores de correo para un dominio."
    },
    {
        id: 13,
        block: 1,
        difficulty: 'high',
        text: "Estás configurando un servidor DNS con Bind9. ¿Qué es una 'Zona Inversa'?",
        options: [
            "Traduce una IP a un Nombre de Dominio.",
            "Traduce un Nombre a una IP.",
            "Es una copia de seguridad del servidor maestro.",
            "Es una zona que rechaza todas las peticiones."
        ],
        correct: 0,
        explanation: "Una Zona Inversa traduce IPs a nombres (reverse DNS lookup), útil para validaciones."
    },
    {
        id: 14,
        block: 1,
        difficulty: 'medium',
        text: "¿Qué comando muestra los puertos abiertos y las conexiones activas en tu servidor?",
        options: ["ls -l", "ps aux", "netstat -tuln o ss -tuln", "ifconfig"],
        correct: 2,
        explanation: "netstat -tuln o ss -tuln muestran puertos escuchando (listening) y conexiones."
    },
    {
        id: 15,
        block: 1,
        difficulty: 'low',
        text: "¿Qué significa HTTP?",
        options: [
            "HyperText Transfer Protocol",
            "High Transfer Text Protocol",
            "Host Type Transfer Protocol",
            "HyperText Terminal Protocol"
        ],
        correct: 0,
        explanation: "HTTP: HyperText Transfer Protocol, protocolo para transferir documentos web."
    },
    {
        id: 16,
        block: 1,
        difficulty: 'medium',
        text: "¿Qué código de estado HTTP indica 'Página no encontrada'?",
        options: ["200", "301", "403", "404"],
        correct: 3,
        explanation: "404 Not Found: el servidor no encontró el recurso solicitado."
    },
    {
        id: 17,
        block: 1,
        difficulty: 'high',
        text: "¿Qué código de estado HTTP indica una redirección permanente (importante para SEO al pasar de HTTP a HTTPS)?",
        options: ["301", "302", "401", "500"],
        correct: 0,
        explanation: "301 Moved Permanently: redirección permanente, los buscadores actualizan la URL."
    },
    {
        id: 18,
        block: 1,
        difficulty: 'low',
        text: "¿Cuál es la dirección IP de loopback (localhost)?",
        options: ["192.168.1.1", "127.0.0.1", "10.0.0.1", "0.0.0.0"],
        correct: 1,
        explanation: "127.0.0.1 es la dirección de loopback para acceder a la máquina local."
    },
    {
        id: 19,
        block: 1,
        difficulty: 'medium',
        text: "¿Qué es la latencia?",
        options: [
            "El ancho de banda total.",
            "El tiempo que tarda un paquete en ir de un punto a otro.",
            "La cantidad de datos perdidos.",
            "La velocidad de la CPU del servidor."
        ],
        correct: 1,
        explanation: "Latencia: tiempo de ida y vuelta de un paquete (RTT - Round Trip Time)."
    },
    {
        id: 20,
        block: 1,
        difficulty: 'high',
        text: "En el modelo TCP/IP, ¿qué protocolo se usa para asignar dinámicamente direcciones IP a los dispositivos?",
        options: ["DNS", "ARP", "DHCP", "ICMP"],
        correct: 2,
        explanation: "DHCP (Dynamic Host Configuration Protocol) asigna IPs automáticamente en una red."
    },

    // BLOQUE 2: LINUX Y PERMISOS (21-40)
    {
        id: 21,
        block: 2,
        difficulty: 'low',
        text: "¿Qué comando lista los archivos de un directorio?",
        options: ["cd", "ls", "mkdir", "touch"],
        correct: 1,
        explanation: "ls (list) muestra archivos y directorios. Usa ls -la para ver detalles."
    },
    {
        id: 22,
        block: 2,
        difficulty: 'low',
        text: "¿Qué comando se usa para borrar un archivo?",
        options: ["rm", "del", "erase", "mv"],
        correct: 0,
        explanation: "rm (remove) borra archivos. ¡Cuidado! No hay papelera de reciclaje en terminal."
    },
    {
        id: 23,
        block: 2,
        difficulty: 'medium',
        text: "¿Qué comando cambia los permisos de un archivo?",
        options: ["chown", "chmod", "chgrp", "attrib"],
        correct: 1,
        explanation: "chmod (change mode) modifica permisos de lectura(r), escritura(w) y ejecución(x)."
    },
    {
        id: 24,
        block: 2,
        difficulty: 'medium',
        text: "¿Qué permiso octal representa lectura, escritura y ejecución para el dueño, y solo lectura y ejecución para el resto?",
        options: ["777", "644", "755", "400"],
        correct: 2,
        explanation: "755 = dueño: rwx (7), grupo: r-x (5), otros: r-x (5)."
    },
    {
        id: 25,
        block: 2,
        difficulty: 'medium',
        text: "¿Qué comando cambia el propietario de un archivo?",
        options: ["chmod", "chown", "usermod", "passwd"],
        correct: 1,
        explanation: "chown usuario:grupo archivo cambia dueño y grupo de un archivo."
    },
    {
        id: 26,
        block: 2,
        difficulty: 'high',
        text: "¿Qué hace el comando sudo !!?",
        options: [
            "Reinicia el sistema.",
            "Ejecuta el último comando introducido con permisos de superusuario.",
            "Muestra el historial de comandos sudo.",
            "Borrar la caché de sudo."
        ],
        correct: 1,
        explanation: "sudo !! ejecuta el comando anterior con sudo (útil si te olvidaste poner sudo)."
    },
    {
        id: 27,
        block: 2,
        difficulty: 'medium',
        text: "¿Dónde se almacenan generalmente los logs del sistema en Linux?",
        options: ["/etc/logs", "/var/log", "/usr/log", "/home/log"],
        correct: 1,
        explanation: "/var/log contiene logs del sistema, como auth.log, syslog, apache/, etc."
    },
    {
        id: 28,
        block: 2,
        difficulty: 'low',
        text: "¿Qué comando crea un directorio nuevo?",
        options: ["mkfile", "newdir", "mkdir", "touch"],
        correct: 2,
        explanation: "mkdir nombre crea un directorio. Usa mkdir -p para crear rutas completas."
    },
    {
        id: 29,
        block: 2,
        difficulty: 'high',
        text: "¿Qué significa el símbolo | (pipe) en la terminal?",
        options: [
            "Ejecuta dos comandos a la vez.",
            "Pasa la salida del primer comando como entrada al segundo.",
            "Redirige la salida a un archivo.",
            "Cancela el comando anterior."
        ],
        correct: 1,
        explanation: "Pipe conecta la salida de un comando con la entrada de otro: comando1 | comando2."
    },
    {
        id: 30,
        block: 2,
        difficulty: 'medium',
        text: "¿Qué editor de texto en terminal es común en servidores Ubuntu?",
        options: ["Word", "Notepad", "nano", "TextEdit"],
        correct: 2,
        explanation: "nano es simple y viene preinstalado. También está vim, pero es más complejo."
    },
    {
        id: 31,
        block: 2,
        difficulty: 'high',
        text: "¿Cómo ejecutas un script llamado install.sh?",
        options: [
            "run install.sh",
            "./install.sh (si tiene permisos de ejecución) o bash install.sh",
            "start install.sh",
            "exec install.sh"
        ],
        correct: 1,
        explanation: "./script.sh requiere permisos de ejecución (chmod +x). Sino, bash script.sh."
    },
    {
        id: 32,
        block: 2,
        difficulty: 'medium',
        text: "¿Qué usuario es el 'superusuario' en Linux?",
        options: ["admin", "administrator", "root", "boss"],
        correct: 2,
        explanation: "root es el superusuario con todos los privilegios. Se accede con sudo o su."
    },
    {
        id: 33,
        block: 2,
        difficulty: 'low',
        text: "¿Qué comando muestra el directorio actual donde estás ubicado?",
        options: ["whereami", "pwd", "cd", "ls"],
        correct: 1,
        explanation: "pwd (Print Working Directory) muestra la ruta completa del directorio actual."
    },
    {
        id: 34,
        block: 2,
        difficulty: 'high',
        text: "¿Qué hace el comando ln -s archivo1 enlace1?",
        options: [
            "Copia el archivo.",
            "Mueve el archivo.",
            "Crea un enlace simbólico (acceso directo) de archivo1.",
            "Comprime el archivo."
        ],
        correct: 2,
        explanation: "ln -s crea un symbolic link (acceso directo). Útil para apuntar a archivos en otras ubicaciones."
    },
    {
        id: 35,
        block: 2,
        difficulty: 'medium',
        text: "¿Cómo actualizas la lista de paquetes disponibles en los repositorios de Ubuntu?",
        options: ["apt upgrade", "apt update", "apt install", "apt refresh"],
        correct: 1,
        explanation: "apt update actualiza la lista de paquetes disponibles. apt upgrade actualiza los paquetes instalados."
    },
    {
        id: 36,
        block: 2,
        difficulty: 'high',
        text: "¿Qué archivo almacena la lista de usuarios del sistema?",
        options: ["/etc/shadow", "/etc/users", "/etc/passwd", "/var/users"],
        correct: 2,
        explanation: "/etc/passwd contiene información de usuarios. /etc/shadow tiene contraseñas encriptadas."
    },
    {
        id: 37,
        block: 2,
        difficulty: 'medium',
        text: "¿Qué hace el comando top o htop?",
        options: [
            "Muestra el espacio en disco.",
            "Muestra los procesos en ejecución y el uso de CPU/RAM.",
            "Muestra la configuración de red.",
            "Muestra los usuarios conectados."
        ],
        correct: 1,
        explanation: "top y htop muestran procesos en tiempo real, uso de CPU, memoria, etc."
    },
    {
        id: 38,
        block: 2,
        difficulty: 'low',
        text: "¿Cuál es el directorio raíz en Linux?",
        options: ["C:\\", "/root", "/", "/home"],
        correct: 2,
        explanation: "/ es el directorio raíz. /root es el home del usuario root."
    },
    {
        id: 39,
        block: 2,
        difficulty: 'high',
        text: "¿Qué permiso numérico es necesario para que una clave privada SSH (.pem) sea aceptada por el cliente SSH?",
        options: ["777", "600 o 400", "755", "644"],
        correct: 1,
        explanation: "Las claves privadas SSH deben tener permisos 600 (rw-------) o 400 (r--------) por seguridad."
    },
    {
        id: 40,
        block: 2,
        difficulty: 'medium',
        text: "¿Qué comando se usa para copiar archivos de forma segura entre un local y un remoto?",
        options: ["cp", "ftp", "scp", "mv"],
        correct: 2,
        explanation: "scp (Secure Copy) usa SSH para transferir archivos de forma segura entre máquinas."
    },

    // BLOQUE 3: APACHE Y SERVIDORES WEB (41-60)
    {
        id: 41,
        block: 3,
        difficulty: 'low',
        text: "¿Cuál es el nombre del servicio de Apache en Ubuntu?",
        options: ["httpd", "apache", "apache2", "webserver"],
        correct: 2,
        explanation: "En Ubuntu/Debian el servicio se llama apache2. En RedHat/CentOS es httpd."
    },
    {
        id: 42,
        block: 3,
        difficulty: 'low',
        text: "¿Dónde se guardan por defecto los archivos HTML en Apache?",
        options: ["/home/www", "/var/www/html", "/etc/apache2", "/usr/local/apache"],
        correct: 1,
        explanation: "DocumentRoot por defecto es /var/www/html en Ubuntu."
    },
    {
        id: 43,
        block: 3,
        difficulty: 'medium',
        text: "¿Qué comando habilita un VirtualHost?",
        options: ["systemctl start site", "a2ensite", "apache2 enable", "a2enmod"],
        correct: 1,
        explanation: "a2ensite activa un sitio (crea enlace simbólico en sites-enabled)."
    },
    {
        id: 44,
        block: 3,
        difficulty: 'medium',
        text: "¿Qué comando recarga la configuración de Apache sin detener el servicio?",
        options: [
            "systemctl stop apache2",
            "systemctl restart apache2",
            "systemctl reload apache2",
            "systemctl start apache2"
        ],
        correct: 2,
        explanation: "systemctl reload apache2 recarga configuración sin desconexiones activas."
    },
    {
        id: 45,
        block: 3,
        difficulty: 'high',
        text: "¿Qué directiva de Apache define dónde están los archivos de la web?",
        options: ["ServerRoot", "DocumentRoot", "DirectoryIndex", "WebFolder"],
        correct: 1,
        explanation: "DocumentRoot establece el directorio raíz para los archivos web."
    },
    {
        id: 46,
        block: 3,
        difficulty: 'high',
        text: "¿Qué directiva de Apache se usa para definir el nombre de dominio principal del VirtualHost?",
        options: ["HostName", "ServerName", "DomainName", "NameVirtualHost"],
        correct: 1,
        explanation: "ServerName define el dominio principal (ej: ejemplo.com)."
    },
    {
        id: 47,
        block: 3,
        difficulty: 'medium',
        text: "¿En qué directorio se crean los archivos .conf de los nuevos sitios?",
        options: [
            "/etc/apache2/sites-enabled",
            "/etc/apache2/conf-available",
            "/etc/apache2/sites-available",
            "/var/www/"
        ],
        correct: 2,
        explanation: "sites-available almacena configuraciones; sites-enabled tiene los enlaces a los activos."
    },
    {
        id: 48,
        block: 3,
        difficulty: 'medium',
        text: "¿Qué comando habilita el módulo de reescritura de URLs (necesario para WordPress o redirecciones)?",
        options: ["a2ensite rewrite", "a2enmod rewrite", "apt install mod_rewrite", "systemctl enable rewrite"],
        correct: 1,
        explanation: "a2enmod rewrite activa el módulo mod_rewrite para reescritura de URLs."
    },
    {
        id: 49,
        block: 3,
        difficulty: 'high',
        text: "¿Qué es el archivo .htaccess?",
        options: [
            "Un archivo de configuración global de Apache.",
            "Un archivo de configuración descentralizada por directorio (permite reescritura, auth, etc.).",
            "Un archivo de logs de acceso.",
            "Un script de arranque de Apache."
        ],
        correct: 1,
        explanation: ".htaccess permite sobreescribir configuraciones Apache por directorio sin reiniciar."
    },
    {
        id: 50,
        block: 3,
        difficulty: 'low',
        text: "¿Qué usuario ejecuta el servicio Apache en Ubuntu por defecto?",
        options: ["root", "apache", "www-data", "web-admin"],
        correct: 2,
        explanation: "www-data es el usuario por defecto de Apache en Ubuntu/Debian por seguridad."
    },
    {
        id: 51,
        block: 3,
        difficulty: 'high',
        text: "Si tienes un error '403 Forbidden', la causa más probable es:",
        options: [
            "Apache no está instalado.",
            "El puerto 80 está cerrado.",
            "Permisos incorrectos en la carpeta o falta el archivo índice.",
            "Error de base de datos."
        ],
        correct: 2,
        explanation: "403 Forbidden: el cliente no tiene permiso para acceder al recurso. Revisa permisos y DirectoryIndex."
    },
    {
        id: 52,
        block: 3,
        difficulty: 'medium',
        text: "¿Qué comando deshabilita un sitio web en Apache?",
        options: ["a2dissite", "a2removesite", "a2stopsite", "rm /etc/apache2/sites-enabled/*"],
        correct: 0,
        explanation: "a2dissite desactiva un sitio (elimina enlace de sites-enabled)."
    },
    {
        id: 53,
        block: 3,
        difficulty: 'high',
        text: "¿Qué directiva define qué archivo se carga primero si solo escribes el directorio (ej: index.php)?",
        options: ["FilePriority", "DocumentRoot", "DirectoryIndex", "DefaultFile"],
        correct: 2,
        explanation: "DirectoryIndex lista archivos por defecto (ej: index.html index.php)."
    },
    {
        id: 54,
        block: 3,
        difficulty: 'medium',
        text: "¿Qué archivo de log consultarías para ver errores de PHP o Apache?",
        options: ["/var/log/syslog", "/var/log/apache2/access.log", "/var/log/apache2/error.log", "/var/log/messages"],
        correct: 2,
        explanation: "error.log contiene errores de Apache y PHP. access.log registra peticiones."
    },
    {
        id: 55,
        block: 3,
        difficulty: 'low',
        text: "¿Qué servidor web es la principal alternativa a Apache?",
        options: ["IIS", "Nginx", "Tomcat", "Caddy"],
        correct: 1,
        explanation: "Nginx es la principal alternativa, conocido por alto rendimiento con muchas conexiones."
    },
    {
        id: 56,
        block: 3,
        difficulty: 'high',
        text: "¿Para qué sirve ServerAlias en un VirtualHost?",
        options: [
            "Para poner un nombre alternativo al servidor (ej: www).",
            "Para cambiar la IP del servidor.",
            "Para redirigir errores.",
            "Para definir el correo del administrador."
        ],
        correct: 0,
        explanation: "ServerAlias define nombres alternativos (alias) para el mismo VirtualHost."
    },
    {
        id: 57,
        block: 3,
        difficulty: 'medium',
        text: "Si configuras HTTPS, ¿qué puerto debes añadir en la etiqueta <VirtualHost>?",
        options: ["*:80", "*:8080", "*:443", "*:22"],
        correct: 2,
        explanation: "El puerto 443 es para HTTPS. *:443 significa 'escuchar en todas las IPs, puerto 443'."
    },
    {
        id: 58,
        block: 3,
        difficulty: 'high',
        text: "¿Qué significa LAMP?",
        options: [
            "Linux, Apache, MySQL, Python",
            "Linux, Apple, Microsoft, PHP",
            "Linux, Apache, MySQL, PHP",
            "Local, Apache, Mainframe, Programs"
        ],
        correct: 2,
        explanation: "LAMP: Linux (SO), Apache (servidor web), MySQL (BD), PHP (lenguaje)."
    },
    {
        id: 59,
        block: 3,
        difficulty: 'medium',
        text: "¿Qué comando comprueba si la sintaxis de tus archivos de configuración de Apache es correcta?",
        options: ["apache2ctl configtest", "apache2 check", "systemctl check apache2", "a2chkconfig"],
        correct: 0,
        explanation: "apache2ctl configtest o apache2 -t verifica sintaxis de configuración."
    },
    {
        id: 60,
        block: 3,
        difficulty: 'low',
        text: "¿Qué es un 'VirtualHost'?",
        options: [
            "Una máquina virtual en la nube.",
            "Un método para alojar varios dominios en un solo servidor web.",
            "Un servidor DNS falso.",
            "Un usuario remoto."
        ],
        correct: 1,
        explanation: "VirtualHost permite servir múltiples sitios web desde un solo servidor Apache."
    },

    // BLOQUE 4: BASES DE DATOS Y ARQUITECTURA (61-80)
    {
        id: 61,
        block: 4,
        difficulty: 'low',
        text: "¿Cuál es el puerto por defecto de MySQL/MariaDB?",
        options: ["8080", "1433", "3306", "5432"],
        correct: 2,
        explanation: "3306 es el puerto por defecto de MySQL/MariaDB. 1433 es SQL Server, 5432 es PostgreSQL."
    },
    {
        id: 62,
        block: 4,
        difficulty: 'low',
        text: "¿Qué comando se usa para entrar a la consola de MySQL como root?",
        options: ["mysql -u root -p", "sql -u root", "dblogin root", "enter mysql"],
        correct: 0,
        explanation: "mysql -u root -p pide usuario root y contraseña. -p significa prompt para contraseña."
    },
    {
        id: 63,
        block: 4,
        difficulty: 'medium',
        text: "En el archivo wp-config.php, ¿qué variable define dónde está la base de datos?",
        options: ["DB_NAME", "DB_HOST", "DB_USER", "SERVER_ADDR"],
        correct: 1,
        explanation: "DB_HOST define la ubicación del servidor de BD (ej: localhost o IP del backend)."
    },
    {
        id: 64,
        block: 4,
        difficulty: 'high',
        text: "En una arquitectura de 2 niveles (P1.8), ¿qué valor debe tener bind-address en la máquina de base de datos?",
        options: ["127.0.0.1", "localhost", "0.0.0.0", "192.168.1.1 (la IP del router)"],
        correct: 2,
        explanation: "0.0.0.0 hace que MySQL escuche en todas las interfaces, permitiendo conexiones del frontend."
    },
    {
        id: 65,
        block: 4,
        difficulty: 'medium',
        text: "¿Qué comando SQL crea una base de datos?",
        options: ["MAKE DATABASE nombre;", "NEW DATABASE nombre;", "CREATE DATABASE nombre;", "INSERT DATABASE nombre;"],
        correct: 2,
        explanation: "CREATE DATABASE nombre_db; crea una nueva base de datos."
    },
    {
        id: 66,
        block: 4,
        difficulty: 'high',
        text: "¿Cuál es la sintaxis correcta para crear un usuario que pueda conectarse desde CUALQUIER IP?",
        options: [
            "CREATE USER 'usuario'@'localhost' ...",
            "CREATE USER 'usuario'@'%' ...",
            "CREATE USER 'usuario'@'all' ...",
            "CREATE USER 'usuario'@'0.0.0.0' ..."
        ],
        correct: 1,
        explanation: "'usuario'@'%' permite conexión desde cualquier host (IP)."
    },
    {
        id: 67,
        block: 4,
        difficulty: 'high',
        text: "Si el Frontend tiene la IP 10.0.0.5, ¿cuál es la forma MÁS SEGURA de crear el usuario en el Backend?",
        options: ["'usuario'@'%'", "'usuario'@'10.0.0.5'", "'usuario'@'localhost'", "'usuario'@'admin'"],
        correct: 1,
        explanation: "Especificar la IP exacta ('usuario'@'10.0.0.5') es más seguro que permitir desde cualquier IP."
    },
    {
        id: 68,
        block: 4,
        difficulty: 'medium',
        text: "¿Qué comando recarga los privilegios en MySQL después de hacer cambios?",
        options: ["RELOAD PRIVILEGES;", "REFRESH GRANT;", "FLUSH PRIVILEGES;", "UPDATE USERS;"],
        correct: 2,
        explanation: "FLUSH PRIVILEGES; aplica cambios en privilegios sin reiniciar MySQL."
    },
    {
        id: 69,
        block: 4,
        difficulty: 'low',
        text: "¿Qué lenguaje se usa para gestionar bases de datos relacionales?",
        options: ["HTML", "SQL", "Java", "Bash"],
        correct: 1,
        explanation: "SQL (Structured Query Language) es el lenguaje estándar para bases de datos relacionales."
    },
    {
        id: 70,
        block: 4,
        difficulty: 'high',
        text: "¿Por qué separamos el Frontend del Backend en máquinas distintas?",
        options: [
            "Para que sea más barato.",
            "Por seguridad y escalabilidad (si cae la web, no pierdes los datos; puedes escalar cada capa independientemente).",
            "Porque Apache y MySQL son incompatibles en la misma máquina.",
            "Para usar menos direcciones IP."
        ],
        correct: 1,
        explanation: "Separación por capas mejora seguridad, rendimiento y permite escalar independientemente."
    },
    {
        id: 71,
        block: 4,
        difficulty: 'medium',
        text: "¿Qué comando otorga permisos a un usuario?",
        options: ["ALLOW", "GIVE", "GRANT", "PERMIT"],
        correct: 2,
        explanation: "GRANT privilegios ON base.* TO 'usuario'@'host';"
    },
    {
        id: 72,
        block: 4,
        difficulty: 'high',
        text: "¿Qué archivo de configuración de MySQL define la dirección de escucha (bind-address) en Ubuntu?",
        options: [
            "/etc/mysql/my.cnf",
            "/etc/mysql/mysql.conf.d/mysqld.cnf",
            "/var/lib/mysql/config.ini",
            "/usr/local/mysql/setup.conf"
        ],
        correct: 1,
        explanation: "En Ubuntu, bind-address está en /etc/mysql/mysql.conf.d/mysqld.cnf"
    },
    {
        id: 73,
        block: 4,
        difficulty: 'medium',
        text: "Si tu web dice 'Error establishing a database connection', ¿qué NO es una causa probable?",
        options: [
            "Contraseña incorrecta en wp-config.php.",
            "El servicio MySQL está detenido.",
            "El firewall del backend bloquea el puerto 3306.",
            "El certificado SSL ha caducado."
        ],
        correct: 3,
        explanation: "SSL caducado afecta HTTPS, no la conexión a BD. Los otros 3 son causas directas."
    },
    {
        id: 74,
        block: 4,
        difficulty: 'low',
        text: "¿Qué comando instala el cliente de MySQL (no el servidor) en Ubuntu?",
        options: ["apt install mysql-server", "apt install mysql-client", "apt install db-client", "apt install sql-viewer"],
        correct: 1,
        explanation: "mysql-client instala herramientas de línea de comandos para conectarse a MySQL."
    },
    {
        id: 75,
        block: 4,
        difficulty: 'high',
        text: "¿Qué hace el comando mysql_secure_installation?",
        options: [
            "Instala MySQL.",
            "Ejecuta un script para mejorar la seguridad (borra usuarios anónimos, deshabilita root remoto, borra DB de test).",
            "Cifra la base de datos.",
            "Crea un backup."
        ],
        correct: 1,
        explanation: "mysql_secure_installation mejora seguridad tras instalar MySQL."
    },
    {
        id: 76,
        block: 4,
        difficulty: 'medium',
        text: "¿Qué tipo de dato SQL se usa para cadenas de texto variables?",
        options: ["INT", "DATE", "VARCHAR", "BOOLEAN"],
        correct: 2,
        explanation: "VARCHAR(size) almacena cadenas de longitud variable hasta 'size' caracteres."
    },
    {
        id: 77,
        block: 4,
        difficulty: 'high',
        text: "En una arquitectura LAMP, ¿quién ejecuta el código PHP?",
        options: [
            "El navegador del cliente.",
            "El servidor MySQL.",
            "El servidor Apache (con el módulo PHP).",
            "El sistema operativo directamente."
        ],
        correct: 2,
        explanation: "Apache con módulo PHP procesa el código en el servidor y envía HTML al cliente."
    },
    {
        id: 78,
        block: 4,
        difficulty: 'medium',
        text: "¿Qué significa que un usuario tenga permisos ALL PRIVILEGES?",
        options: [
            "Solo puede leer datos.",
            "Puede hacer cualquier cosa en la base de datos asignada (crear, borrar, modificar).",
            "Puede administrar el servidor Linux.",
            "Puede conectarse sin contraseña."
        ],
        correct: 1,
        explanation: "ALL PRIVILEGES otorga todos los permisos posibles sobre la base de datos especificada."
    },
    {
        id: 79,
        block: 4,
        difficulty: 'low',
        text: "¿Cuál es el usuario administrador por defecto de MySQL?",
        options: ["admin", "root", "sa", "manager"],
        correct: 1,
        explanation: "root es el superusuario por defecto en MySQL, similar a Linux."
    },
    {
        id: 80,
        block: 4,
        difficulty: 'high',
        text: "Si configuras bind-address = 0.0.0.0 pero no configuras el firewall (Security Group en AWS), ¿qué pasará?",
        options: [
            "MySQL funcionará y será accesible desde fuera.",
            "MySQL funcionará pero las conexiones externas serán bloqueadas por el firewall.",
            "MySQL no arrancará.",
            "MySQL se borrará."
        ],
        correct: 1,
        explanation: "0.0.0.0 permite conexiones externas, pero el firewall por defecto de AWS/SO podría bloquear el puerto 3306."
    },

    // BLOQUE 5: CLOUD (AWS) Y SEGURIDAD (81-100)
    {
        id: 81,
        block: 5,
        difficulty: 'low',
        text: "¿Qué servicio de AWS ofrece servidores virtuales?",
        options: ["S3", "RDS", "EC2", "Lambda"],
        correct: 2,
        explanation: "EC2 (Elastic Compute Cloud) proporciona instancias virtuales escalables."
    },
    {
        id: 82,
        block: 5,
        difficulty: 'medium',
        text: "¿Para qué sirve un Security Group en AWS?",
        options: [
            "Para hacer copias de seguridad.",
            "Actúa como un firewall virtual controlando el tráfico de entrada y salida.",
            "Para gestionar usuarios y contraseñas.",
            "Para agrupar servidores por precio."
        ],
        correct: 1,
        explanation: "Security Group es un firewall a nivel de instancia que controla tráfico inbound/outbound."
    },
    {
        id: 83,
        block: 5,
        difficulty: 'medium',
        text: "¿Qué es una Elastic IP?",
        options: [
            "Una IP que cambia cada hora.",
            "Una IP pública estática que conservas aunque reinicies la instancia.",
            "Una IP privada para la base de datos.",
            "Una dirección IPv6."
        ],
        correct: 1,
        explanation: "Elastic IP es una IP pública estática que puedes asociar/desasociar de instancias."
    },
    {
        id: 84,
        block: 5,
        difficulty: 'high',
        text: "¿Qué herramienta usas para conectarte a una instancia EC2 de Linux desde Windows si no tienes una terminal bash?",
        options: ["PuTTY", "RDP", "Notepad++", "WinZip"],
        correct: 0,
        explanation: "PuTTY es cliente SSH gratuito para Windows para conectarse a servidores Linux."
    },
    {
        id: 85,
        block: 5,
        difficulty: 'medium',
        text: "Para alojar una web segura, ¿qué puertos DEBES abrir en el Security Group (Inbound rules)?",
        options: ["Solo 22.", "21 y 22.", "22, 80 y 443.", "8080 y 3306."],
        correct: 2,
        explanation: "22 (SSH administración), 80 (HTTP), 443 (HTTPS). El resto depende de necesidades."
    },
    {
        id: 86,
        block: 5,
        difficulty: 'high',
        text: "¿Qué es Certbot?",
        options: [
            "Un robot que hackea webs.",
            "Una herramienta automática para obtener y renovar certificados SSL de Let's Encrypt.",
            "Un plugin de WordPress.",
            "Un firewall de AWS."
        ],
        correct: 1,
        explanation: "Certbot automatiza obtención y renovación de certificados SSL gratuitos de Let's Encrypt."
    },
    {
        id: 87,
        block: 5,
        difficulty: 'low',
        text: "¿Qué indica el candado en la barra de direcciones del navegador?",
        options: [
            "Que la web es lenta.",
            "Que la conexión está cifrada (HTTPS).",
            "Que el sitio está bloqueado.",
            "Que el sitio es privado."
        ],
        correct: 1,
        explanation: "Candado verde/seguro indica HTTPS activo con certificado válido."
    },
    {
        id: 88,
        block: 5,
        difficulty: 'medium',
        text: "¿Qué es Cloud-init?",
        options: [
            "Un servicio de almacenamiento.",
            "Un estándar para personalizar instancias en la nube en el primer arranque (ej: instalar paquetes automáticamente).",
            "Un comando para iniciar sesión en AWS.",
            "El sistema de facturación de AWS."
        ],
        correct: 1,
        explanation: "Cloud-init ejecuta scripts al primer arranque para configurar automáticamente instancias."
    },
    {
        id: 89,
        block: 5,
        difficulty: 'high',
        text: "¿Qué diferencia hay entre un certificado autofirmado y uno de una CA (como Let's Encrypt)?",
        options: [
            "No hay diferencia técnica.",
            "El autofirmado es más seguro.",
            "El autofirmado dará una advertencia de seguridad en el navegador porque no lo avala una autoridad confiable.",
            "El de CA es de pago siempre."
        ],
        correct: 2,
        explanation: "Los navegadores confían en CAs reconocidas, pero mostrarán advertencia con autofirmados."
    },
    {
        id: 90,
        block: 5,
        difficulty: 'medium',
        text: "En AWS, ¿qué es una AMI?",
        options: [
            "Amazon Machine Image (la plantilla del S.O., ej: Ubuntu 22.04).",
            "Amazon Main Interface.",
            "Amazon Management Identity.",
            "Una base de datos."
        ],
        correct: 0,
        explanation: "AMI (Amazon Machine Image) es una plantilla que contiene SO y software para lanzar instancias."
    },
    {
        id: 91,
        block: 5,
        difficulty: 'high',
        text: "¿Qué es el par de claves (Key Pair) .pem en AWS?",
        options: [
            "Una contraseña larga.",
            "Un archivo de clave privada criptográfica necesario para autenticarse por SSH (sustituye a la contraseña).",
            "Un certificado SSL.",
            "La licencia de Windows."
        ],
        correct: 1,
        explanation: "El archivo .pem es la clave privada para autenticación SSH en lugar de contraseña."
    },
    {
        id: 92,
        block: 5,
        difficulty: 'medium',
        text: "¿Qué protocolo utiliza ping para comprobar la conectividad?",
        options: ["TCP", "UDP", "ICMP", "HTTP"],
        correct: 2,
        explanation: "ping usa ICMP (Internet Control Message Protocol) para pruebas de conectividad."
    },
    {
        id: 93,
        block: 5,
        difficulty: 'high',
        text: "Si pierdes tu archivo .pem de una instancia EC2:",
        options: [
            "Puedes pedirle una copia a Amazon.",
            "Puedes recuperar la contraseña con el correo.",
            "Generalmente pierdes el acceso SSH para siempre (a menos que uses métodos complejos de recuperación montando el disco en otra máquina).",
            "No pasa nada, entras sin clave."
        ],
        correct: 2,
        explanation: "AWS no almacena claves privadas. Pérdida significa acceso SSH perdido."
    },
    {
        id: 94,
        block: 5,
        difficulty: 'low',
        text: "¿Qué significa SaaS?",
        options: [
            "Software as a Service (ej: Gmail).",
            "Storage as a Service.",
            "Server as a System.",
            "Security as a Service."
        ],
        correct: 0,
        explanation: "SaaS: software como servicio, accesible vía web sin instalación local."
    },
    {
        id: 95,
        block: 5,
        difficulty: 'medium',
        text: "¿Qué comando usas para instalar Certbot en Ubuntu con Apache?",
        options: ["apt install python3-certbot-apache", "apt install ssl-gen", "install certbot", "make ssl"],
        correct: 0,
        explanation: "apt install python3-certbot-apache instala Certbot con plugin Apache."
    },
    {
        id: 96,
        block: 5,
        difficulty: 'high',
        text: "En una configuración de HTTPS, ¿qué archivo contiene la clave privada del servidor?",
        options: ["cert.pem", "chain.pem", "privkey.pem", "public.key"],
        correct: 2,
        explanation: "privkey.pem contiene la clave privada (debe mantenerse SECRETA)."
    },
    {
        id: 97,
        block: 5,
        difficulty: 'high',
        text: "¿Qué es el Handshake TLS/SSL?",
        options: [
            "Un saludo entre programadores.",
            "El proceso inicial donde cliente y servidor negocian el cifrado y validan el certificado antes de enviar datos.",
            "El cierre de la conexión.",
            "Un ataque de hackers."
        ],
        correct: 1,
        explanation: "SSL/TLS Handshake establece conexión segura negociando cifrado y autenticando certificado."
    },
    {
        id: 98,
        block: 5,
        difficulty: 'medium',
        text: "¿Qué es IaaS?",
        options: [
            "Internet as a Service.",
            "Infrastructure as a Service (ej: AWS EC2, tú gestionas el SO).",
            "Image as a Service.",
            "Intelligence as a Service."
        ],
        correct: 1,
        explanation: "IaaS: infraestructura como servicio (máquinas virtuales, redes, almacenamiento)."
    },
    {
        id: 99,
        block: 5,
        difficulty: 'low',
        text: "¿Qué compañía provee los servicios de AWS?",
        options: ["Google", "Microsoft", "Amazon", "Apple"],
        correct: 2,
        explanation: "AWS = Amazon Web Services, servicio cloud de Amazon."
    },
    {
        id: 100,
        block: 5,
        difficulty: 'high',
        text: "¿Por qué se recomienda deshabilitar el acceso root por SSH (PermitRootLogin no)?",
        options: [
            "Porque root no tiene contraseña.",
            "Para evitar que atacantes intenten adivinar la contraseña del usuario más poderoso del sistema.",
            "Porque ocupa mucha memoria.",
            "Porque root no puede usar internet."
        ],
        correct: 1,
        explanation: "Deshabilitar root por SSH fuerza usar usuario normal + sudo, reduciendo superficie de ataque."
    }
];

        // Variables globales
        let currentQuestion = 0;
        let userAnswers = new Array(questions.length).fill(null);
        let score = 0;
        let startTime = null;
        let timerInterval = null;
        let filteredQuestions = [...questions];

        // Inicializar
        document.addEventListener('DOMContentLoaded', () => {
            loadQuestion(0);
            updateStats();
        });

        // Cargar pregunta
        function loadQuestion(index) {
            if (index < 0 || index >= filteredQuestions.length) return;
            
            currentQuestion = index;
            const q = filteredQuestions[index];
            
            // Actualizar interfaz
            document.getElementById('question-num').textContent = q.id;
            document.getElementById('question-text').textContent = q.text;
            
            // Actualizar badge de dificultad
            const badge = document.getElementById('difficulty-badge');
            badge.textContent = getDifficultyEmoji(q.difficulty) + ' ' + q.difficulty.toUpperCase();
            badge.className = `difficulty difficulty-${q.difficulty}`;
            
            // Cargar opciones
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((option, i) => {
                const div = document.createElement('div');
                div.className = 'option';
                if (userAnswers[q.id - 1] === i) {
                    div.classList.add('selected');
                }
                div.innerHTML = `
                    <span class="option-letter">${letters[i]}</span>
                    ${option}
                `;
                div.onclick = () => selectOption(i);
                optionsContainer.appendChild(div);
            });
            
            // Actualizar progreso
            updateProgress();
            updateStats();
            
            // Ocultar feedback
            document.getElementById('feedback').classList.remove('show');
        }

        // Seleccionar opción
        function selectOption(optionIndex) {
            const q = filteredQuestions[currentQuestion];
            userAnswers[q.id - 1] = optionIndex;
            
            // Remover selección anterior
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Marcar selección actual
            document.querySelectorAll('.option')[optionIndex].classList.add('selected');
            
            // Mostrar feedback inmediato
            showFeedback(optionIndex === q.correct);
            
            // Actualizar puntuación
            updateScore();
        }

        // Mostrar feedback
        function showFeedback(isCorrect) {
            const q = filteredQuestions[currentQuestion];
            const feedback = document.getElementById('feedback');
            
            feedback.className = `feedback show ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
            feedback.innerHTML = `
                <strong>${isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong>
                <div class="explanation">${q.explanation}</div>
            `;
            
            // Resaltar opción correcta
            document.querySelectorAll('.option').forEach((opt, i) => {
                if (i === q.correct) {
                    opt.classList.add('correct');
                } else if (i === userAnswers[q.id - 1] && i !== q.correct) {
                    opt.classList.add('incorrect');
                }
            });
        }

        // Navegación
        function nextQuestion() {
            if (currentQuestion < filteredQuestions.length - 1) {
                loadQuestion(currentQuestion + 1);
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                loadQuestion(currentQuestion - 1);
            }
        }

        // Iniciar examen
        function startExam() {
            if (!startTime) {
                startTime = new Date();
                timerInterval = setInterval(updateTimer, 1000);
                alert('⏱️ ¡Examen iniciado! El temporizador está corriendo.');
            }
        }

        // Reiniciar examen
        function resetExam() {
            if (confirm('¿Estás seguro de reiniciar el examen? Perderás todo el progreso.')) {
                userAnswers.fill(null);
                score = 0;
                startTime = null;
                clearInterval(timerInterval);
                document.getElementById('timer').textContent = '00:00';
                filteredQuestions = [...questions];
                loadQuestion(0);
                updateStats();
                closeResults();
            }
        }

        // Actualizar temporizador
        function updateTimer() {
            if (!startTime) return;
            
            const now = new Date();
            const diff = Math.floor((now - startTime) / 1000);
            const minutes = Math.floor(diff / 60);
            const seconds = diff % 60;
            
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Actualizar puntuación
        function updateScore() {
            score = 0;
            let correctCount = 0;
            
            questions.forEach((q, i) => {
                if (userAnswers[i] === q.correct) {
                    score++;
                    correctCount++;
                }
            });
            
            document.getElementById('score').textContent = score;
            document.getElementById('correct-count').textContent = correctCount;
        }

        // Actualizar estadísticas
        function updateStats() {
        document.getElementById('current-question').textContent = (currentQuestion + 1) + "/100";            updateScore();
        }

        // Actualizar barra de progreso
        function updateProgress() {
            const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;
            document.getElementById('progress-fill').style.width = `${progress}%`;
        }

        // Filtrar por bloque
        function filterByBlock() {
            const block = document.getElementById('block-select').value;
            
            if (block === 'all') {
                filteredQuestions = [...questions];
            } else {
                filteredQuestions = questions.filter(q => q.block === parseInt(block));
            }
            
            loadQuestion(0);
        }

        // Mostrar resultados
        function showResults() {
            updateScore();
            
            const total = questions.length;
            const correct = score;
            const percentage = Math.round((correct / total) * 100);
            
            // Calcular por nivel
            const lowQuestions = questions.filter(q => q.difficulty === 'low');
            const mediumQuestions = questions.filter(q => q.difficulty === 'medium');
            const highQuestions = questions.filter(q => q.difficulty === 'high');
            
            let lowCorrect = 0, mediumCorrect = 0, highCorrect = 0;
            
            questions.forEach((q, i) => {
                if (userAnswers[i] === q.correct) {
                    if (q.difficulty === 'low') lowCorrect++;
                    else if (q.difficulty === 'medium') mediumCorrect++;
                    else if (q.difficulty === 'high') highCorrect++;
                }
            });
            
            // Actualizar modal
            document.getElementById('final-score').textContent = `${percentage}%`;
            document.getElementById('total-score').textContent = `${score}/100`;
            document.getElementById('total-correct').textContent = `${correct}/${total}`;
            document.getElementById('total-time').textContent = document.getElementById('timer').textContent;
            document.getElementById('low-stats').textContent = `${lowCorrect}/${lowQuestions.length}`;
            document.getElementById('medium-stats').textContent = `${mediumCorrect}/${mediumQuestions.length}`;
            document.getElementById('high-stats').textContent = `${highCorrect}/${highQuestions.length}`;
            document.getElementById('accuracy').textContent = `${percentage}%`;
            
            // Título según resultado
            const title = document.getElementById('result-title');
            if (percentage >= 80) title.textContent = "🎉 ¡Excelente trabajo!";
            else if (percentage >= 60) title.textContent = "👍 ¡Buen trabajo!";
            else title.textContent = "📚 Sigue practicando";
            
            // Mostrar modal
            document.getElementById('results-modal').classList.add('show');
        }

        // Cerrar resultados
        function closeResults() {
            document.getElementById('results-modal').classList.remove('show');
        }

        // Mostrar soluciones
        function showAnswers() {
            let solutions = "🔑 SOLUCIONES DEL EXAMEN\n\n";
            
            questions.forEach((q, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.correct;
                const answerLetter = String.fromCharCode(65 + q.correct); // A, B, C, D
                
                solutions += `Pregunta ${index + 1}: ${q.text}\n`;
                solutions += `Respuesta correcta: ${answerLetter}) ${q.options[q.correct]}\n`;
                solutions += `Tu respuesta: ${userAnswer !== null ? 
                    String.fromCharCode(65 + userAnswer) + ') ' + q.options[userAnswer] : 
                    'No respondida'}\n`;
                solutions += `Estado: ${isCorrect ? '✅ CORRECTO' : '❌ INCORRECTO'}\n`;
                solutions += `Explicación: ${q.explanation}\n`;
                solutions += "─".repeat(50) + "\n\n";
            });
            
            // Crear ventana con soluciones
            const solutionsWindow = window.open('', '_blank');
            solutionsWindow.document.write(`
                <html>
                <head>
                    <title>Soluciones del Examen</title>
                    <style>
                        body { font-family: monospace; padding: 20px; }
                        .correct { color: green; }
                        .incorrect { color: red; }
                    </style>
                </head>
                <body>
                    <pre>${solutions}</pre>
                </body>
                </html>
            `);
        }

        // Helper: obtener emoji de dificultad
        function getDifficultyEmoji(difficulty) {
            switch(difficulty) {
                case 'low': return '🟢';
                case 'medium': return '🟡';
                case 'high': return '🔴';
                default: return '⚪';
            }
        }

        // Añadir más preguntas automáticamente
        function addMoreQuestions() {
            // Para el ejemplo, solo tenemos 10 preguntas
            // En un caso real, aquí cargaríamos las 100 preguntas
            console.log("Se pueden añadir más preguntas siguiendo el formato establecido");
        }
// ============================================
// FUNCIONALIDADES EXTRA - AGREGAR AL FINAL
// ============================================

// Variables globales adicionales
let markedQuestions = new Set();
let reviewedQuestions = new Set();

// 1. FUNCIÓN PARA MEZCLAR PREGUNTAS ALEATORIAMENTE
function shuffleQuestions() {
    // Mezclar el array de preguntas filtradas
    for (let i = filteredQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
    }
    
    currentQuestion = 0;
    loadQuestion(currentQuestion);
    
    showNotification('🔀 Preguntas mezcladas aleatoriamente', 'info');
}

// 2. FUNCIÓN PARA CREAR EXAMEN POR DIFICULTAD
function createCustomExam(difficulty) {
    let difficultyText = '';
    
    switch(difficulty) {
        case 'low':
            filteredQuestions = questions.filter(q => q.difficulty === 'low');
            difficultyText = '🟢 Nivel Bajo';
            break;
        case 'medium':
            filteredQuestions = questions.filter(q => q.difficulty === 'medium');
            difficultyText = '🟡 Nivel Medio';
            break;
        case 'high':
            filteredQuestions = questions.filter(q => q.difficulty === 'high');
            difficultyText = '🔴 Nivel Alto';
            break;
        default:
            filteredQuestions = [...questions];
            difficultyText = '🌐 Todos los niveles';
    }
    
    currentQuestion = 0;
    loadQuestion(currentQuestion);
    
    showNotification(`📚 Examen personalizado: ${difficultyText} (${filteredQuestions.length} preguntas)`, 'info');
}

// 3. FUNCIÓN PARA CREAR EXAMEN POR BLOQUE
function createBlockExam(blockNumber) {
    const blockNames = {
        1: '1️⃣ Redes y Protocolos',
        2: '🐧 Linux y Permisos',
        3: '🕸️ Apache y Servidores',
        4: '🗄️ Bases de Datos',
        5: '☁️ Cloud y Seguridad'
    };
    
    filteredQuestions = questions.filter(q => q.block === blockNumber);
    currentQuestion = 0;
    loadQuestion(currentQuestion);
    
    showNotification(`📖 Examen del Bloque ${blockNumber}: ${blockNames[blockNumber]} (${filteredQuestions.length} preguntas)`, 'info');
}

// 4. FUNCIÓN PARA MOSTRAR NOTIFICACIONES
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    // Agregar al documento
    document.body.appendChild(notification);
    
    // Auto-remover después de 3 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// 5. FUNCIÓN PARA EXPORTAR RESULTADOS COMO PDF
function exportResults() {
    const results = {
        score: score,
        total: questions.length,
        percentage: Math.round((score / questions.length) * 100),
        date: new Date().toLocaleString(),
        time: document.getElementById('timer').textContent,
        answers: userAnswers.map((answer, index) => ({
            question: questions[index].text,
            userAnswer: answer !== null ? questions[index].options[answer] : 'No respondida',
            correctAnswer: questions[index].options[questions[index].correct],
            isCorrect: answer === questions[index].correct
        }))
    };
    
    // Crear contenido para el PDF
    let content = `
        <h1>📋 Resultados del Examen</h1>
        <h2>Despliegue de Aplicaciones Web</h2>
        <hr>
        <p><strong>Fecha:</strong> ${results.date}</p>
        <p><strong>Puntuación:</strong> ${results.score}/${results.total} (${results.percentage}%)</p>
        <p><strong>Tiempo:</strong> ${results.time}</p>
        <hr>
        <h3>📊 Detalle de Respuestas:</h3>
    `;
    
    results.answers.forEach((item, index) => {
        content += `
            <div style="margin-bottom: 15px; padding: 10px; border-left: 4px solid ${item.isCorrect ? '#2ecc71' : '#e74c3c'}; background: #f8f9fa;">
                <p><strong>Pregunta ${index + 1}:</strong> ${item.question}</p>
                <p><strong>Tu respuesta:</strong> ${item.userAnswer}</p>
                <p><strong>Respuesta correcta:</strong> ${item.correctAnswer}</p>
                <p><strong>Estado:</strong> ${item.isCorrect ? '✅ Correcto' : '❌ Incorrecto'}</p>
            </div>
        `;
    });
    
    // Abrir en nueva ventana para imprimir
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Resultados del Examen</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #2c3e50; }
                h2 { color: #3498db; }
                h3 { color: #2c3e50; margin-top: 30px; }
                hr { border: 1px solid #ddd; margin: 20px 0; }
                .correct { color: #27ae60; }
                .incorrect { color: #e74c3c; }
                @media print {
                    button { display: none; }
                    body { font-size: 12pt; }
                }
            </style>
        </head>
        <body>
            ${content}
            <div style="margin-top: 30px; text-align: center;">
                <button onclick="window.print()" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    🖨️ Imprimir Resultados
                </button>
                <button onclick="window.close()" style="padding: 10px 20px; background: #95a5a6; color: white; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;">
                    Cerrar
                </button>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    
    showNotification('📄 Resultados exportados correctamente', 'success');
}

// 6. FUNCIÓN PARA REINICIAR EXAMEN (MEJORADA)
function resetExam() {
    if (confirm('¿Estás seguro de reiniciar el examen? Perderás todo el progreso.')) {
        userAnswers.fill(null);
        score = 0;
        startTime = null;
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = '00:00';
        filteredQuestions = [...questions];
        markedQuestions.clear();
        reviewedQuestions.clear();
        
        // Restaurar orden original
        questions.sort((a, b) => a.id - b.id);
        filteredQuestions.sort((a, b) => a.id - b.id);
        
        currentQuestion = 0;
        loadQuestion(currentQuestion);
        updateStats();
        closeResults();
        
        showNotification('🔄 Examen reiniciado correctamente', 'success');
    }
}

// 7. FUNCIÓN PARA MODO OSCURO/CLARO
function toggleDarkMode() {
    const body = document.body;
    const container = document.querySelector('.container');
    
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    showNotification(isDark ? '🌙 Modo oscuro activado' : '☀️ Modo claro activado', 'info');
}

// 8. FUNCIÓN PARA MOSTRAR PISTAS
function showHint() {
    const q = filteredQuestions[currentQuestion];
    const hints = {
        'low': '🟢 Pista: Esta es una pregunta básica. Revisa conceptos fundamentales.',
        'medium': '🟡 Pista: Necesitas aplicar conocimientos prácticos. Piensa en comandos o configuraciones comunes.',
        'high': '🔴 Pista: Pregunta avanzada. Considera casos de uso reales y mejores prácticas.'
    };
    
    alert(`💡 PISTA:\n\nNivel: ${q.difficulty.toUpperCase()}\n${hints[q.difficulty]}\n\nBloque: ${getBlockName(q.block)}`);
}

function getBlockName(blockNumber) {
    const blocks = {
        1: 'Redes y Protocolos',
        2: 'Linux y Permisos',
        3: 'Apache y Servidores',
        4: 'Bases de Datos',
        5: 'Cloud y Seguridad'
    };
    return blocks[blockNumber] || 'General';
}

// 9. FUNCIÓN PARA MARCAR PREGUNTA
function markForReview() {
    const q = filteredQuestions[currentQuestion];
    const questionId = q.id;
    
    if (markedQuestions.has(questionId)) {
        markedQuestions.delete(questionId);
        showNotification('❌ Pregunta desmarcada', 'info');
    } else {
        markedQuestions.add(questionId);
        showNotification('🚩 Pregunta marcada para revisión', 'info');
    }
    
    // Actualizar visualización
    loadQuestion(currentQuestion);
}

// 10. FUNCIÓN PARA MARCAR COMO REVISADA
function markAsReviewed() {
    const q = filteredQuestions[currentQuestion];
    const questionId = q.id;
    
    if (reviewedQuestions.has(questionId)) {
        reviewedQuestions.delete(questionId);
        showNotification('📝 Pregunta marcada como no revisada', 'info');
    } else {
        reviewedQuestions.add(questionId);
        showNotification('✅ Pregunta marcada como revisada', 'success');
    }
    
    // Actualizar visualización
    loadQuestion(currentQuestion);
}

// 11. INICIALIZAR MODO OSCURO DESDE LOCALSTORAGE
function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        document.querySelector('.container')?.classList.add('dark-mode');
    }
}

// 12. FUNCIÓN PARA GUARDAR PROGRESO
function saveProgress() {
    const progress = {
        answers: userAnswers,
        currentQuestion: currentQuestion,
        score: score,
        time: document.getElementById('timer').textContent,
        timestamp: new Date().toISOString(),
        markedQuestions: Array.from(markedQuestions),
        reviewedQuestions: Array.from(reviewedQuestions)
    };
    
    localStorage.setItem('examProgress', JSON.stringify(progress));
    showNotification('💾 Progreso guardado localmente', 'success');
}

// 13. FUNCIÓN PARA CARGAR PROGRESO
function loadProgress() {
    const saved = localStorage.getItem('examProgress');
    if (saved) {
        if (confirm('¿Cargar progreso guardado anteriormente?')) {
            const progress = JSON.parse(saved);
            userAnswers = progress.answers;
            currentQuestion = progress.currentQuestion || 0;
            score = progress.score || 0;
            markedQuestions = new Set(progress.markedQuestions || []);
            reviewedQuestions = new Set(progress.reviewedQuestions || []);
            
            loadQuestion(currentQuestion);
            updateStats();
            
            showNotification('📂 Progreso cargado correctamente', 'success');
        }
    } else {
        showNotification('No hay progreso guardado', 'warning');
    }
}

// 14. FUNCIÓN PARA COMPARTIR RESULTADOS
function shareResults() {
    const score = document.getElementById('score').textContent;
    const total = questions.length;
    const percentage = Math.round((parseInt(score) / total) * 100);
    const time = document.getElementById('timer').textContent;
    
    const text = `🎯 Examen de Despliegue Web:\nPuntuación: ${score}/${total} (${percentage}%)\nTiempo: ${time}\n\n¡Practica con esta aplicación!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Mis resultados del examen',
            text: text,
            url: window.location.href
        });
    } else {
        // Copiar al portapapeles como fallback
        navigator.clipboard.writeText(text)
            .then(() => showNotification('📋 Resultados copiados al portapapeles', 'success'))
            .catch(() => alert(text));
    }
}

// 15. FUNCIÓN PARA VER SOLO PREGUNTAS MARCADAS
function showMarkedQuestions() {
    if (markedQuestions.size === 0) {
        showNotification('No tienes preguntas marcadas', 'warning');
        return;
    }
    
    filteredQuestions = questions.filter(q => markedQuestions.has(q.id));
    currentQuestion = 0;
    loadQuestion(currentQuestion);
    
    showNotification(`📌 Mostrando ${filteredQuestions.length} preguntas marcadas`, 'info');
}

// 16. FUNCIÓN PARA VER SOLO PREGUNTAS SIN RESPONDER
function showUnansweredQuestions() {
    const unanswered = questions.filter((q, index) => userAnswers[index] === null);
    
    if (unanswered.length === 0) {
        showNotification('🎉 ¡Has respondido todas las preguntas!', 'success');
        return;
    }
    
    filteredQuestions = unanswered;
    currentQuestion = 0;
    loadQuestion(currentQuestion);
    
    showNotification(`❓ Mostrando ${filteredQuestions.length} preguntas sin responder`, 'info');
}

// 17. MODIFICAR loadQuestion PARA MOSTRAR MARCADAS/REVISADAS
// Reemplaza la función loadQuestion existente por esta versión mejorada:
const originalLoadQuestion = window.loadQuestion;
window.loadQuestion = function(index) {
    originalLoadQuestion(index);
    
    // Marcar pregunta si está en la lista
    const q = filteredQuestions[currentQuestion];
    const questionId = q.id;
    
    const questionText = document.getElementById('question-text');
    if (markedQuestions.has(questionId)) {
        questionText.classList.add('question-marked');
        // Marcar también la opción seleccionada
        if (userAnswers[questionId - 1] !== null) {
            const options = document.querySelectorAll('.option');
            options[userAnswers[questionId - 1]]?.classList.add('marked');
        }
    }
    
    if (reviewedQuestions.has(questionId)) {
        questionText.classList.add('question-reviewed');
    }
};

// 18. MODIFICAR updateProgress PARA MOSTRAR PORCENTAJE
const originalUpdateProgress = window.updateProgress;
window.updateProgress = function() {
    originalUpdateProgress();
    
    const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;
    document.getElementById('progress-label').textContent = `${Math.round(progress)}%`;
};

// 19. FUNCIÓN PARA AGREGAR BOTONES EXTRA A LA INTERFAZ
function addExtraButtons() {
    const controls = document.querySelector('.controls');
    if (!controls) return;
    
    // Crear contenedor para botones extra
    const extraControls = document.createElement('div');
    extraControls.className = 'extra-controls';
    
    // Botones extra
    extraControls.innerHTML = `
        <button class="btn-info" onclick="shuffleQuestions()" title="Mezclar preguntas aleatoriamente">
            <i class="fas fa-random"></i> Mezclar
        </button>
        <button class="btn-info" onclick="createCustomExam('low')" title="Solo preguntas básicas">
            <i class="fas fa-circle" style="color: #28a745"></i> Básicas
        </button>
        <button class="btn-info" onclick="createCustomExam('medium')" title="Solo preguntas medias">
            <i class="fas fa-circle" style="color: #ffc107"></i> Medias
        </button>
        <button class="btn-info" onclick="createCustomExam('high')" title="Solo preguntas avanzadas">
            <i class="fas fa-circle" style="color: #dc3545"></i> Avanzadas
        </button>
        <button class="btn-info" onclick="showUnansweredQuestions()" title="Mostrar solo preguntas sin responder">
            <i class="fas fa-question-circle"></i> Sin responder
        </button>
        <button class="btn-info" onclick="showMarkedQuestions()" title="Mostrar preguntas marcadas">
            <i class="fas fa-flag"></i> Marcadas
        </button>
        <button class="btn-info" onclick="toggleDarkMode()" title="Alternar tema claro/oscuro">
            <i class="fas fa-moon"></i> Tema
        </button>
        <button class="btn-info" onclick="saveProgress()" title="Guardar progreso localmente">
            <i class="fas fa-save"></i> Guardar
        </button>
        <button class="btn-info" onclick="loadProgress()" title="Cargar progreso guardado">
            <i class="fas fa-folder-open"></i> Cargar
        </button>
    `;
    
    // Insertar después de los controles principales
    controls.parentNode.insertBefore(extraControls, controls.nextSibling);
}

// 20. MODIFICAR LA INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    loadQuestion(0);
    updateStats();
    addExtraButtons(); // Agregar botones extra automáticamente
});

// 21. FUNCIÓN PARA MOSTRAR ESTADÍSTICAS DETALLADAS
function showDetailedStats() {
    let stats = '📊 ESTADÍSTICAS DETALLADAS:\n\n';
    
    // Por bloque
    for (let block = 1; block <= 5; block++) {
        const blockQuestions = questions.filter(q => q.block === block);
        const blockCorrect = blockQuestions.filter((q, i) => {
            const index = questions.indexOf(q);
            return userAnswers[index] === q.correct;
        }).length;
        
        stats += `Bloque ${block}: ${blockCorrect}/${blockQuestions.length} (${Math.round((blockCorrect/blockQuestions.length)*100)}%)\n`;
    }
    
    stats += '\n';
    
    // Por dificultad
    const difficulties = ['low', 'medium', 'high'];
    difficulties.forEach(diff => {
        const diffQuestions = questions.filter(q => q.difficulty === diff);
        const diffCorrect = diffQuestions.filter((q, i) => {
            const index = questions.indexOf(q);
            return userAnswers[index] === q.correct;
        }).length;
        
        const emoji = diff === 'low' ? '🟢' : diff === 'medium' ? '🟡' : '🔴';
        stats += `${emoji} ${diff}: ${diffCorrect}/${diffQuestions.length} (${Math.round((diffCorrect/diffQuestions.length)*100)}%)\n`;
    });
    
    alert(stats);
}

// Agregar esta función al objeto global
window.showDetailedStats = showDetailedStats;
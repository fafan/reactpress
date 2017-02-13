<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'database_name_here');

/** MySQL database username */
define('DB_USER', 'username_here');

/** MySQL database password */
define('DB_PASSWORD', 'password_here');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/** SQLite */
define('DB_FILE', 'wordpress.db');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
 define('AUTH_KEY',         'T+ls!]%!^.M|dW2hfq;BQ2#uw.`>hE,otDu4no7:tbr=~?}9`+&9w 5W^-}61Tn{');
 define('SECURE_AUTH_KEY',  '+TYWj&u0t3{<42:Fg^<>Z] *Xx.o2N2|<e^*iKf%I|<y!vT;6Ne !:7AM:x-$^Vt');
 define('LOGGED_IN_KEY',    '{ZBM`2BWJJKCP{e2_n<rhYZV6hoqBQ,8R.*ca,JX8xm]Fn<1*@qU]1DiR/q)!7=o');
 define('NONCE_KEY',        '?k/A**+eV4wRi`yr5/3`zXrf4I;-KfyQ)3Y_:s7t,i_,+*AF*h:J|+QQKU)|E, d');
 define('AUTH_SALT',        'f@dP~e5V?A7K$F!UqSZItSr~8XS+$sqoJ7t5^G$%[0n2%7{=r2&<LCS{XoGUT9#s');
 define('SECURE_AUTH_SALT', '!>DdBEs5]z6xL2C|Jz^wW=y4+P ^ZB^N0an<dqYW2zn! BJ%vBUjl-c+AG4/&0O-');
 define('LOGGED_IN_SALT',   'hC8x5u3.Fe&|ZN} }Ys=ud|hg<cdi%MBGSi>8;TDd+wBIPry9:o1(%1Q{O[A-pTC');
 define('NONCE_SALT',       'XNfLX_`qG%b/q.[bpR$64?!r26+D+PlOyv6X4Q~G.&X6nCJdc4BiGh$+1oKh_sC?');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

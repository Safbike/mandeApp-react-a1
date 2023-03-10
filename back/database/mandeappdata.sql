PGDMP     (    .                 {            mandeappdata    15.1    15.1 /    6           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            7           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            8           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            9           1262    24576    mandeappdata    DATABASE        CREATE DATABASE mandeappdata WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE mandeappdata;
                postgres    false            ?            1259    24594    cliente    TABLE     8  CREATE TABLE public.cliente (
    primer_nombre character varying,
    primer_apellido character varying,
    correo character varying,
    telefono character varying,
    password_usuario character varying,
    id_cliente integer NOT NULL,
    foto_recibos character varying,
    direccion character varying
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            ?            1259    24607    cliente_id_cliente_seq    SEQUENCE     ?   CREATE SEQUENCE public.cliente_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.cliente_id_cliente_seq;
       public          postgres    false    216            :           0    0    cliente_id_cliente_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.cliente_id_cliente_seq OWNED BY public.cliente.id_cliente;
          public          postgres    false    217            ?            1259    24656 	   direccion    TABLE     ?   CREATE TABLE public.direccion (
    carrera character varying,
    calle character varying,
    ciudad character varying,
    codigo_postal character varying
);
    DROP TABLE public.direccion;
       public         heap    postgres    false            ?            1259    24643    estado_trabajador    TABLE     Z   CREATE TABLE public.estado_trabajador (
    puntuacion integer,
    disponible boolean
);
 %   DROP TABLE public.estado_trabajador;
       public         heap    postgres    false            ?            1259    24635    facturas    TABLE     ?   CREATE TABLE public.facturas (
    id_factura integer NOT NULL,
    numero_factura character varying,
    hora_factura date,
    hora_inicio_ser date,
    hora_final_ser date
);
    DROP TABLE public.facturas;
       public         heap    postgres    false            ?            1259    24634    facturas_id_factura_seq    SEQUENCE     ?   CREATE SEQUENCE public.facturas_id_factura_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.facturas_id_factura_seq;
       public          postgres    false    223            ;           0    0    facturas_id_factura_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.facturas_id_factura_seq OWNED BY public.facturas.id_factura;
          public          postgres    false    222            ?            1259    24651    metodo_pago    TABLE     l   CREATE TABLE public.metodo_pago (
    numero_pago character varying,
    password_pago character varying
);
    DROP TABLE public.metodo_pago;
       public         heap    postgres    false            ?            1259    24626 	   profesion    TABLE     b   CREATE TABLE public.profesion (
    id_profesion integer NOT NULL,
    labor character varying
);
    DROP TABLE public.profesion;
       public         heap    postgres    false            ?            1259    24625    profesion_id_profesion_seq    SEQUENCE     ?   CREATE SEQUENCE public.profesion_id_profesion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.profesion_id_profesion_seq;
       public          postgres    false    221            <           0    0    profesion_id_profesion_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.profesion_id_profesion_seq OWNED BY public.profesion.id_profesion;
          public          postgres    false    220            ?            1259    24646    servicio    TABLE     k   CREATE TABLE public.servicio (
    nombre_servicio character varying,
    descripcion character varying
);
    DROP TABLE public.servicio;
       public         heap    postgres    false            ?            1259    24617 
   trabajador    TABLE     c  CREATE TABLE public.trabajador (
    id_trabajador integer NOT NULL,
    primer_nombre character varying,
    primer_apellido character varying,
    correo character varying,
    telefono character varying,
    password_usuario character varying,
    foto_documento character varying,
    foto_perfil character varying,
    profesion character varying
);
    DROP TABLE public.trabajador;
       public         heap    postgres    false            ?            1259    24616    trabajador_id_trabajador_seq    SEQUENCE     ?   CREATE SEQUENCE public.trabajador_id_trabajador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.trabajador_id_trabajador_seq;
       public          postgres    false    219            =           0    0    trabajador_id_trabajador_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.trabajador_id_trabajador_seq OWNED BY public.trabajador.id_trabajador;
          public          postgres    false    218            ?            1259    24578    usuario    TABLE       CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    primer_nombre character varying,
    primer_apellido character varying,
    correo character varying,
    telefono character varying,
    password_usuario character varying,
    foto_perfil character varying
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            ?            1259    24577    usuario_id_usuario_seq    SEQUENCE     ?   CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_id_usuario_seq;
       public          postgres    false    215            >           0    0    usuario_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;
          public          postgres    false    214            ?           2604    24608    cliente id_cliente    DEFAULT     x   ALTER TABLE ONLY public.cliente ALTER COLUMN id_cliente SET DEFAULT nextval('public.cliente_id_cliente_seq'::regclass);
 A   ALTER TABLE public.cliente ALTER COLUMN id_cliente DROP DEFAULT;
       public          postgres    false    217    216            ?           2604    24638    facturas id_factura    DEFAULT     z   ALTER TABLE ONLY public.facturas ALTER COLUMN id_factura SET DEFAULT nextval('public.facturas_id_factura_seq'::regclass);
 B   ALTER TABLE public.facturas ALTER COLUMN id_factura DROP DEFAULT;
       public          postgres    false    222    223    223            ?           2604    24629    profesion id_profesion    DEFAULT     ?   ALTER TABLE ONLY public.profesion ALTER COLUMN id_profesion SET DEFAULT nextval('public.profesion_id_profesion_seq'::regclass);
 E   ALTER TABLE public.profesion ALTER COLUMN id_profesion DROP DEFAULT;
       public          postgres    false    221    220    221            ?           2604    24620    trabajador id_trabajador    DEFAULT     ?   ALTER TABLE ONLY public.trabajador ALTER COLUMN id_trabajador SET DEFAULT nextval('public.trabajador_id_trabajador_seq'::regclass);
 G   ALTER TABLE public.trabajador ALTER COLUMN id_trabajador DROP DEFAULT;
       public          postgres    false    218    219    219            ?           2604    24581    usuario id_usuario    DEFAULT     x   ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    214    215    215            (          0    24594    cliente 
   TABLE DATA           ?   COPY public.cliente (primer_nombre, primer_apellido, correo, telefono, password_usuario, id_cliente, foto_recibos, direccion) FROM stdin;
    public          postgres    false    216   75       3          0    24656 	   direccion 
   TABLE DATA           J   COPY public.direccion (carrera, calle, ciudad, codigo_postal) FROM stdin;
    public          postgres    false    227   T5       0          0    24643    estado_trabajador 
   TABLE DATA           C   COPY public.estado_trabajador (puntuacion, disponible) FROM stdin;
    public          postgres    false    224   q5       /          0    24635    facturas 
   TABLE DATA           m   COPY public.facturas (id_factura, numero_factura, hora_factura, hora_inicio_ser, hora_final_ser) FROM stdin;
    public          postgres    false    223   ?5       2          0    24651    metodo_pago 
   TABLE DATA           A   COPY public.metodo_pago (numero_pago, password_pago) FROM stdin;
    public          postgres    false    226   ?5       -          0    24626 	   profesion 
   TABLE DATA           8   COPY public.profesion (id_profesion, labor) FROM stdin;
    public          postgres    false    221   ?5       1          0    24646    servicio 
   TABLE DATA           @   COPY public.servicio (nombre_servicio, descripcion) FROM stdin;
    public          postgres    false    225   26       +          0    24617 
   trabajador 
   TABLE DATA           ?   COPY public.trabajador (id_trabajador, primer_nombre, primer_apellido, correo, telefono, password_usuario, foto_documento, foto_perfil, profesion) FROM stdin;
    public          postgres    false    219   O6       '          0    24578    usuario 
   TABLE DATA           ~   COPY public.usuario (id_usuario, primer_nombre, primer_apellido, correo, telefono, password_usuario, foto_perfil) FROM stdin;
    public          postgres    false    215   \7       ?           0    0    cliente_id_cliente_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.cliente_id_cliente_seq', 1, false);
          public          postgres    false    217            @           0    0    facturas_id_factura_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.facturas_id_factura_seq', 1, false);
          public          postgres    false    222            A           0    0    profesion_id_profesion_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.profesion_id_profesion_seq', 10, true);
          public          postgres    false    220            B           0    0    trabajador_id_trabajador_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.trabajador_id_trabajador_seq', 24, true);
          public          postgres    false    218            C           0    0    usuario_id_usuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 2, true);
          public          postgres    false    214            ?           2606    24615    cliente pk_id_cliente 
   CONSTRAINT     [   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT pk_id_cliente PRIMARY KEY (id_cliente);
 ?   ALTER TABLE ONLY public.cliente DROP CONSTRAINT pk_id_cliente;
       public            postgres    false    216            ?           2606    24642    facturas pk_id_factura 
   CONSTRAINT     \   ALTER TABLE ONLY public.facturas
    ADD CONSTRAINT pk_id_factura PRIMARY KEY (id_factura);
 @   ALTER TABLE ONLY public.facturas DROP CONSTRAINT pk_id_factura;
       public            postgres    false    223            ?           2606    24633    profesion pk_id_profesion 
   CONSTRAINT     a   ALTER TABLE ONLY public.profesion
    ADD CONSTRAINT pk_id_profesion PRIMARY KEY (id_profesion);
 C   ALTER TABLE ONLY public.profesion DROP CONSTRAINT pk_id_profesion;
       public            postgres    false    221            ?           2606    24624    trabajador pk_id_trabajador 
   CONSTRAINT     d   ALTER TABLE ONLY public.trabajador
    ADD CONSTRAINT pk_id_trabajador PRIMARY KEY (id_trabajador);
 E   ALTER TABLE ONLY public.trabajador DROP CONSTRAINT pk_id_trabajador;
       public            postgres    false    219            ?           2606    24585    usuario pk_id_usuario 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT pk_id_usuario PRIMARY KEY (id_usuario);
 ?   ALTER TABLE ONLY public.usuario DROP CONSTRAINT pk_id_usuario;
       public            postgres    false    215            (      x?????? ? ?      3      x?????? ? ?      0      x?????? ? ?      /      x?????? ? ?      2      x?????? ? ?      -   Z   x?3?(*MMJ?2?1L`S(?Ȉ??4?2?t-.ITH-V(?KTHL.)M?ɬJL????2?L+M-JTHIU?)??KM?24????????? ?k?      1      x?????? ? ?      +   ?   x??PMs? =o~?#??z??b?^v?mJ???}S-m???(8???? ?????>????eI?%]?LY??RS?6@??<?&?#????3???43x???f?????@iS78bY?#E?@Sd???G?E??D =?̿M?(?q?????^6^?\?Ȼ?ߩ?Bjv?!K؞???bW??̒*]?'J.9~??V;?nYa???N???Y?4?Ǣ?%???bM????n?~?va???Ի????Uළ      '   `   x?5?1
?0???aD????	l??Y4??d%??%??L????]6Š9{A*sK?V?Fpk{6???5Lw?5{L>??;?CC??۾k?1lp}???"?s? ?     
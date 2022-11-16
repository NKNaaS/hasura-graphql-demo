SET check_function_bodies = false;
INSERT INTO public."user" (id, name, created_at, updated_at) VALUES (1, '田中太郎', '2022-11-16 12:30:11.101626+00', '2022-11-16 12:30:11.101626+00');
INSERT INTO public."user" (id, name, created_at, updated_at) VALUES (2, '山田花子', '2022-11-16 12:30:11.101626+00', '2022-11-16 12:30:11.101626+00');
SELECT pg_catalog.setval('public.user_id_seq', 2, true);

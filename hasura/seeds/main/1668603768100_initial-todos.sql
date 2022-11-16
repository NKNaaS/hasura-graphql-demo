SET check_function_bodies = false;
INSERT INTO public.todo (id, user_id, content, created_at, updated_at) VALUES (1, 1, '山へ芝刈りに行く', '2022-11-16 13:02:19.401823+00', '2022-11-16 13:02:19.401823+00');
INSERT INTO public.todo (id, user_id, content, created_at, updated_at) VALUES (2, 2, '川へ洗濯に行く', '2022-11-16 13:02:19.401823+00', '2022-11-16 13:02:19.401823+00');
SELECT pg_catalog.setval('public.todo_id_seq', 2, true);

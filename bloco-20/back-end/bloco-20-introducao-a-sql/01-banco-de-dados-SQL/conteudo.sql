# Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;

# Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
SELECT title, release_year, rating FROM sakila.film;

# Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM sakila.film;

# Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT last_name FROM sakila.actor;

# Quantos sobrenomes únicos temos na tabela?
SELECT COUNT(DISTINCT last_name) FROM sakila.actor





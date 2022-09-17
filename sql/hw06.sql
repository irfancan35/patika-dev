-- Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

-- 1. film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
SELECT AVG(rental_rate) FROM film;

-- 2. film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar? (92)
SELECT COUNT(*) FROM film 
WHERE title LIKE 'C%';

-- 3. film tablosunda bulunan filmlerden rental_rate değeri 0.99'a eşit olan en uzun (length) film kaç dakikadır?
SELECT length FROM film 
WHERE rental_rate = 0.99 
ORDER BY length DESC 
LIMIT 1;

-- 4. film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır? (21)
SELECT COUNT(DISTINCT(replacement_cost)) FROM film 
WHERE length > 150;

-- 1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    birthday DATE,
    email VARCHAR(100)
);

-- 2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
insert into employee (name, birthday, email) values 
    ('Valaree Breydin', '2019-11-15', 'vbreydin0@mlb.com'),
    ('Berget Dullingham', '1998-12-31', 'bdullingham1@mapquest.com'),
    ('Cairistiona Deverall', '2017-03-06', 'cdeverall2@bing.com'),
    ('Dall Stealey', '1949-07-31', 'dstealey3@google.ca'),
    ('Gerianna Goldhawk', '1974-04-08', 'ggoldhawk4@friendfeed.com'),
    ('Bernadette Addis', '1933-03-29', 'baddis5@1und1.de'),
    ('Nari Braferton', '1998-03-20', 'nbraferton6@topsy.com'),
    ('Perla Sleightholm', '1955-11-12', 'psleightholm7@histats.com'),
    ('Minnie Budgen', '1929-10-16', 'mbudgen8@dion.ne.jp'),
    ('Margeaux Poundsford', '1902-09-14', 'mpoundsford9@blogs.com'),
    ('Paloma Kehir', '1919-07-20', 'pkehira@istockphoto.com'),
    ('Audrye Renad', '1991-12-09', 'arenadb@163.com'),
    ('Farra Cree', '1969-07-09', 'fcreec@auda.org.au'),
    ('Cathe Fedorski', '2019-09-03', 'cfedorskid@t.co'),
    ('Corella Stichall', '2000-12-24', 'cstichalle@washingtonpost.com'),
    ('Gasparo Houliston', '2002-11-30', 'ghoulistonf@dell.com'),
    ('Selma Kupec', '2001-01-05', 'skupecg@dedecms.com'),
    ('Peggi Hamlen', '1953-10-11', 'phamlenh@yellowpages.com'),
    ('Eleanore Parfitt', '2003-02-16', 'eparfitti@thetimes.co.uk'),
    ('Conni Laborde', '1974-10-06', 'clabordej@seattletimes.com'),
    ('Hildy Doswell', '2009-06-23', 'hdoswellk@google.nl'),
    ('Falito Champ', '1907-11-01', 'fchampl@myspace.com'),
    ('Noelyn Hedlestone', '1910-04-13', 'nhedlestonem@google.pl'),
    ('Nathanil Miere', '1915-04-24', 'nmieren@cbsnews.com'),
    ('Mitchael Garr', '1976-12-13', 'mgarro@meetup.com'),
    ('Vincenty de Villier', '1920-08-13', 'vdep@rediff.com'),
    ('Tanitansy Guage', '1996-06-13', 'tguageq@imageshack.us'),
    ('Martin Stallen', '1919-02-27', 'mstallenr@shop-pro.jp'),
    ('Joli Kennford', '1916-01-01', 'jkennfords@arstechnica.com'),
    ('Sydney Wisher', '1934-08-03', 'swishert@wordpress.org'),
    ('Graig Livick', '2020-01-18', 'glivicku@scribd.com'),
    ('Bettine Tohill', '1948-01-11', 'btohillv@cpanel.net'),
    ('Delphinia Foch', '2003-09-07', 'dfochw@multiply.com'),
    ('Sherman Legge', '1952-12-11', 'sleggex@naver.com'),
    ('Jamison O'' Finan', '1963-07-13', 'joy@intel.com'),
    ('Yasmin Stowgill', '1952-12-15', 'ystowgillz@washingtonpost.com'),
    ('Prescott Hitter', '1996-02-05', 'phitter10@hao123.com'),
    ('Vale Adlam', '1985-08-16', 'vadlam11@paypal.com'),
    ('Maurie Whales', '1963-02-13', 'mwhales12@domainmarket.com'),
    ('Petronia Wilford', '2000-06-27', 'pwilford13@fastcompany.com'),
    ('Adrian Pettifor', '1997-07-02', 'apettifor14@last.fm'),
    ('Weber Witherup', '1930-06-11', 'wwitherup15@is.gd'),
    ('Tiler Guilloud', '1922-08-30', 'tguilloud16@theguardian.com'),
    ('Kaye Malam', '1937-07-10', 'kmalam17@gov.uk'),
    ('Olenka Lehr', '1908-06-10', 'olehr18@seesaa.net'),
    ('Cami Lowensohn', '1901-08-20', 'clowensohn19@imageshack.us'),
    ('Aubert Scally', '1982-04-15', 'ascally1a@yandex.ru'),
    ('Tris Matfin', '1919-12-27', 'tmatfin1b@bigcartel.com'),
    ('Jorey Officer', '1989-09-20', 'jofficer1c@woothemes.com'),
    ('Jacinta Abrahamian', '1956-11-15', 'jabrahamian1d@goo.ne.jp');

-- 3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
UPDATE employee
SET name = 'updated',
    birthday = '2000-01-01'
WHERE id BETWEEN 5 AND 10
RETURNING *;

-- 4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
DELETE FROM employee 
WHERE name LIKE 'A%'
RETURNING *;

-- 
DROP TABLE IF EXISTS employee;

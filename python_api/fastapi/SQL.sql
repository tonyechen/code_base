-- DROP TABLE IF EXISTS posts;

-- CREATE TABLE IF NOT EXISTS posts(
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(30) NOT NULL DEFAULT 'Untitled Post',
--     content VARCHAR NOT NULL DEFAULT 'Empty Content',
--     published BOOLEAN NOT NULL DEFAULT true,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );

INSERT INTO posts(title, content)
VALUES( 'first post', 'some interesting content' );

INSERT INTO posts(title, content)
VALUES( 'second post', 'some other interesting content' );
# MongoDB

## Some commands:

Show Databases:

```
show databases
```

Switch to a database:

```
use <database_name>
```

Find documents in collection:

```
db.<collection_name>.find(<Objects>(filter), <Objects>(limit to these fields))
```

Ex:

```
// find in collection books where the document has a page value of 100
// include only the field author and the field sales (0 means exclude)
db.books.find({"page": 100}, {"author":0, "sales": 0})
```

Operators:
https://www.mongodb.com/docs/manual/reference/operator/query/
Comparison:

> : $gt
> = : $gte
> < : $lt
> <= : $lte

example:

```
db.books.find({rating: {$gt: 7}})
```

Logical:
or : $or
and : $and

example:

```
db.books.find({$or: [{rating: 1}, {author: "Anthony Chen"}]})
```

Count numbers of documents returned:

```
db.books.find().count()
```

Limit amount of documents:

```
db.books.find().limit()
```

Sort the returned documents

```
// 1 is ascending, -1 is descending
db.books.find().sort({"title": 1})
```

Querying Arrays:

```
// see if "fantasy" is in the genre array
db.books.find({generes: "fantasy"})

// check for exact match
db.books.find({generes: ["fantasy"]})

// check if more than one match is in the array
db.books.find({generes: {$all: ["fantasy", "sci-fi"]}})

// query nested documents:
db.books.find({"reviews.name": "luigi"}})

```

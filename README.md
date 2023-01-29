https://youtu.be/35RlydUf6xo

https://fireship.io/lessons/advanced-firestore-nosql-data-structure-examples/

### Reasons for firestore
1. sql databases are inefficient as they require more CPU for joins
2. Nosql are joinless

### 4 techniques of relational data model
1. embedding : adding data directly to a document

posts collection, we add all tags directly as data in this collection
i.e. each post document will have a tag array and all tags will be there as members of that array
>most performant
>most cost effective as we need only one document read to get all data
< but we might be reading data which we wont be needing

2. Root collection

tags collection and each tag document will have one tag

collection     document       data
tags            BKBHIGKJBH     name cool
                               url  /tags/cool   
many to many relationship as each tag can have many posts
and each post can have many tags
collection       document        data
posts            kjagshdkjhdk    tags(array)
                                  0: cool
                                  1: hot
                                  title: My Post
3. SubCollection
Nest tag data as subollection of post document

one to many relationship between posts and tags

we wont be able to query across posts for shared tags

multiple document reads for a small collection of data


4. Bucketing 

tags collection and then we create a documnt id which matches the document id of the post; so we have two documents with the same id
one in the tags collection and one in the posts collection

only two document reads needed even if a post has 50 tags
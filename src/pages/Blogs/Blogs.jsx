import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div className='mx-10'>
            <div className='text-center mt-12 mb-12'>
                <h2 className='text-5xl pb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'>Blog Page</h2>
            </div>
            <div className='grid gap-10'>
                {/* Blog-1 */}
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img className='w-1/2 p-5' src="https://i.ibb.co/PY0Twvc/blog-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-700">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p><span className='font-semibold'>Access Token:</span> An access token is a credential that is used to access protected resources on an API or server. It serves as proof of authentication and authorization for a particular user or client. Access tokens are typically short-lived and have an expiration time associated with them. They are commonly used in token-based authentication mechanisms like OAuth 2.0.</p>
                        <p>
                            <span className='font-semibold'>Refresh Token:</span> A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is usually issued along with an access token during the authentication process. The refresh token is used to request a new access token without requiring the user to re-enter their credentials. Refresh tokens have a longer expiration time compared to access tokens.</p>
                        <p>
                            <span className='font-semibold'>Here's a typical flow of how access and refresh tokens work together:</span> <br />

                            1. The client (such as a web or mobile application) authenticates the user and obtains an access token and refresh token from the authentication server. <br />

                            2. The client includes the access token in each request to the API or server that requires authentication. The server verifies the access token to ensure the client has the necessary permissions to access the requested resource. <br />

                            3. If the access token expires, the client can use the refresh token to request a new access token from the authentication server without requiring the user to log in again. This process is known as token refresh or token rotation.
                        </p>
                        <p>
                            <span className='font-semibold'>Regarding storage on the client-side, it is important to handle access and refresh tokens securely to prevent unauthorized access. Here are some considerations:</span> <br />

                            1. Access tokens: Since access tokens are short-lived and are used frequently, they are usually stored in memory on the client-side. Storing them in a secure memory location or using secure storage mechanisms provided by the operating system or framework is recommended. <br />

                            2. Refresh tokens: Refresh tokens have a longer lifespan and are used less frequently. It is generally recommended to store them securely, such as using encrypted storage mechanisms provided by the operating system or using secure storage solutions designed for sensitive data, like Keychain (iOS) or KeyStore (Android).
                        </p>
                    </div>
                </div>

                {/* Blog-2*/}
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img className='w-1/2 p-5' src="https://i.ibb.co/txZpzYP/blog-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-700">What is the Compare SQL and NoSQL databases?</h2>
                        <p><span className='font-semibold'>SQL Database:</span> <br />1. Structure: SQL databases are structured databases that use a tabular format to store data. They have a predefined schema that defines the structure of tables and relationships between them. <br />
                            2. Data model: SQL databases use a relational data model, where data is organized into tables with rows and columns. They enforce ACID (Atomicity, Consistency, Isolation, Durability) properties to ensure data integrity. <br />
                            3. Query language: SQL databases use the Structured Query Language (SQL) to query and manipulate data. SQL provides a standardized way to interact with the database and perform complex operations using joins, aggregations, and transactions. <br />
                            4. Scalability: SQL databases are typically vertically scalable, meaning they can handle increased workloads by adding more resources to a single server. Scaling horizontally across multiple servers can be challenging. <br />
                            5. Schema flexibility: SQL databases have a fixed schema, meaning the structure of tables and relationships must be defined before data can be inserted. Modifying the schema requires altering the table structure, which can be a complex and time-consuming process. <br />
                            6. Data consistency: SQL databases emphasize data consistency and enforce strict constraints through the use of transactions. This ensures that data is reliably stored and retrieved.
                        </p>
                        <p>
                            <span className='font-semibold'>NoSQL databases:</span> <br />1. Structure: NoSQL databases are non-relational and have a flexible schema. They can store data in various formats such as key-value pairs, documents, column-family, or graphs. <br />
                            2. Data model: NoSQL databases use different data models based on their type. For example, key-value stores focus on simple lookup by keys, document databases store data in JSON-like documents, column-family databases organize data into columns, and graph databases focus on relationships between entities. <br />
                            3. Query language: NoSQL databases often have their own query languages, specific to their data model. Some NoSQL databases also support SQL-like query languages for more flexible querying. <br />
                            4. Scalability: NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers, allowing for easier scaling by adding more machines to handle increased load. <br />
                            5. Schema flexibility: NoSQL databases offer dynamic schema, allowing flexibility in the structure of data. New fields can be added to documents without modifying the entire database, providing agility in development. <br />
                            6. Data consistency: NoSQL databases prioritize scalability and performance over strict data consistency. They often provide eventual consistency, where data updates propagate asynchronously, allowing for high availability and performance.
                        </p>
                    </div>
                </div>

                {/* Blog-3*/}
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img className='w-1/2 p-5' src="https://i.ibb.co/M52rDCk/blog-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-700">What is express js? & What is Nest JS ?</h2>
                        <p><span className='font-semibold'>Express JS:</span> <br />Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js is known for its lightweight and unopinionated nature, allowing developers to have a high degree of control over their application's structure and functionality. It provides various features such as routing, middleware support, template engine integration, and easy handling of HTTP requests and responses.
                        </p>
                        <p>
                            <span className='font-semibold'>Nest JS:</span> <br />Nest.js, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with and heavily inspired by Angular, the popular JavaScript framework for building web applications. Nest.js uses TypeScript as its primary language and incorporates concepts from object-oriented programming, functional programming, and reactive programming.
                        </p>
                    </div>
                </div>

                {/* Blog-4*/}
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img  className='w-1/2 mt-5 border' src="https://i.ibb.co/CKxTrkM/blog-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-blue-700">What is MongoDB aggregate and how does it work?</h2>
                        <p><span className='font-semibold'>MongoDB's aggregation:</span> MongoDB's aggregation framework is a powerful feature that allows you to perform advanced data processing and analysis operations on your MongoDB collections. It provides a flexible and efficient way to retrieve, transform, and aggregate data within the database. <br />

                            The aggregation framework is designed around the concept of a pipeline. A pipeline consists of multiple stages, each performing a specific operation on the input documents and passing the results to the next stage. The pipeline stages are executed in sequence, allowing you to progressively shape and refine the data.
                        </p>
                        <p>
                            <span className='font-semibold'>Here's an overview of some commonly used aggregation stages:</span> <br />
                            1. $match: Filters the documents based on specified criteria to select a subset for further processing. It uses the same syntax as the regular find queries in MongoDB. <br />

                            2. $group: Groups documents together based on a specified key and applies aggregate functions to calculate values for each group. It allows you to perform operations like counting, summing, averaging, and more. <br />

                            3. $project: Reshapes the documents by including, excluding, or transforming fields. It helps you control the fields present in the output documents. <br />

                            4. $sort: Sorts the documents based on one or more fields in ascending or descending order. <br />

                            5. $limit and $skip: Control the number of documents to include in the result set and skip a specified number of documents, respectively. <br />

                            6. $unwind: Deconstructs an array field from the input documents and outputs a new document for each element of the array. This is useful when you need to analyze array data individually. <br />

                            7. $lookup: Performs a left outer join with another collection in the same database to enrich the input documents with data from the joined collection. <br />
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blogs;
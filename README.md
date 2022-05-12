# bitmama_test
A controller logic which generate unique ids concurrently with other running instances

# Question 1
## Design  and Implement the controller logic :

### Functional Requirement :
1) Generate unique id

### Non-functional Requirement :
1) No collision possibility in the generated ids
2) Handle many requests
3) Any server instance can leave or join the process

### API design :
1) /api/generateId

Solution: 
1) unique Id = uuid() + timestamp
Advantage : 1) Unique and the probability of collision is very smaall


2)/api/getId/:id
returns the information about an id if it exist

### High-level design :
                                                    
                                                  /---------> ID-Generator 1
GET:    /api/generateId  -------------->          Loader Balancer ---- ----------> ID-Generator 2


                                                   \-----------> ID-Generator 3
     
                                                   
##  The boundaries for which the solutions might pose a problem :
Possible collision of Id

Handling : The unique Id generated contains in it the particular timestamp in milliseconds since jan 1, 1970 which can never collide


# Question 2
Why do you think it is a bad idea to simply solve the above issue with keeping the sequence in a database?

ANS :
1) INFORMATION DISCLOSURE : It leaks some information about the system hence enabling security exploitation.
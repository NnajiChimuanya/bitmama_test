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
1) Return a uuid + timestamp

Advantage : 1) Unique and the probability of collision is very smaall



### High-level design :
                                                    ---------> ID-Generator 1
                                                  /
GET:  /api/generateId  ----->  Loader Balancer ---- ----------> ID-Generator 2
                                                  \
                                                    -----------> ID-Generator 3

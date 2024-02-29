"""
One of the fun features of Aquaintly is that users can rate movies they have seen from 1 to 5. We want to use these ratings to make movie recommendations.

Ratings will be provided in the following format:
  [Member Name, Movie Name, Rating]

We consider two users to have similar taste in movies if they have both rated the same movie as 4 or 5. 

A movie should be recommended to a user if:
- They haven't rated the movie
- A user with similar taste has rated the movie as 4 or 5

Example: 
ratings = [
    ["Alice", "Frozen", "5"],
    ["Bob", "Mad Max", "5"],
    ["Charlie", "Lost In Translation", "4"],
    ["Charlie", "Inception", "4"],
    ["Bob", "All About Eve", "3"],
    ["Bob", "Lost In Translation", "5"],
    ["Dennis", "All About Eve", "5"],
    ["Dennis", "Mad Max", "4"],
    ["Charlie", "Topsy-Turvy", "2"],
    ["Dennis", "Topsy-Turvy", "4"],
    ["Alice", "Lost In Translation", "1"],
    ['Franz', 'Lost In Translation', '5'],
    ['Franz', 'Mad Max', '5']
]

If we want to recommend a movie to Charlie, we would recommend "Mad Max" because:
- Charlie has not rated "Mad Max"
- Charlie and Bob have similar taste as they both rated "Lost in Translation" 4 or 5
- Bob rated "Mad Max" a 5

Write a function that takes the name of a user and a collection of ratings, and returns a collection of all movie recommendations that can be made for the given user.

All test cases:
recommendations("Charlie", ratings) => ["Mad Max"]
recommendations("Bob", ratings) => ["Inception", "Topsy-Turvy"]
recommendations("Dennis", ratings) => ["Lost In Translation"]
recommendations("Alice", ratings) => []
recommendations("Franz", ratings) => ["Inception", "All About Eve", "Topsy-Turvy"]

Complexity Variable:
R = number of ratings
M = number of movies
U = number of users

"""

##hash obj to count nums of connections
#iterate through events
#if connect, add a count of +1 to both users names at idx 1 and 2
#else decrement each users counts if a disconnect is found

#once done looping through events, loop through keys of obj and if count <= 3 add to less friend arr, if more than 3 add to greater list
from collections import Counter
def grouping(events, count):
    lessThree = []
    moreThree = []
    friendsCounter = Counter()
    
    for event in events:
        action, friendOne, friendTwo = event
        if action == "CONNECT":
            friendsCounter[friendOne] += 1
            friendsCounter[friendTwo] += 1
        else:
            friendsCounter[friendOne] -= 1
            friendsCounter[friendTwo] -= 1
            
    for friend in friendsCounter:
        if friendsCounter[friend] >= count:
            moreThree.append(friend)
        else:
            lessThree.append(friend)
            
    return [lessThree, moreThree]

ratings = [
["Alice", "Frozen", "5"],
["Bob", "Mad Max", "5"],
["Charlie", "Lost In Translation", "4"],
["Charlie", "Inception", "4"],
["Bob", "All About Eve", "3"],
["Bob", "Lost In Translation", "5"],
["Dennis", "All About Eve", "5"],
["Dennis", "Mad Max", "4"],
["Charlie", "Topsy-Turvy", "2"],
["Dennis", "Topsy-Turvy", "4"],
["Alice", "Lost In Translation", "1"],
["Franz", "Lost In Translation", "5"],
["Franz", "Mad Max", "5"]
]

##part 1, find all the users that share the same 4 and 5 ratings,

#obj with movie as key and vals as list of people who rated it 4 or 5

#set with strs for names of shared movie enjoyers



#part 2 get list of movies charlie has not seen, iterate through this, check to see
#if sharedInterest set has a reviewer who highly rates the unseen movie
from collections import defaultdict
def recommendations(viewer, ratings):
    recs = []
    likesMovie = defaultdict(list)
    
    for rating in ratings:
        viewer, movieTitle, rateCount = rating
        if rateCount > 3:
            likesMovie[movieTitle].append(viewer)
          
            
    
    
    return recs
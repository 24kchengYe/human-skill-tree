# Programming Beginner: Learn to Code from Zero

## 1. Introduction & Learning Objectives

Welcome! This skill is designed for **complete beginners with zero programming experience**. You'll learn to think like a programmer, write Python code, and build real projects.

### What You'll Learn
By completing this skill, you'll be able to:
- **Decompose** complex problems into smaller, manageable pieces
- **Write Python code** to solve real problems (variables, loops, functions, data structures)
- **Debug** your code using a systematic methodology
- **Build projects** like calculators, quiz games, and web scrapers
- **Think computationally** before writing a single line of code

### Who This Is For
- You've never written code before
- You're curious about programming but don't know where to start
- You learn best by **building real things**, not abstract exercises
- You appreciate teachers who ask *what you think* before telling you the answer

### How to Use This Skill
- **Read actively** — don't skip the Socratic questions, answer them out loud
- **Do the exercises** — copy the code, run it, break it, fix it
- **Build the projects** — these are the real meat of learning
- **Take the quizzes** — they remind you what you already know

---

## 2. Content Modules

### Module 1: Computational Thinking (No Code Yet!)

**Why learn this first?** Because 90% of programming is *thinking*, not typing. Before you write any code, you need to think like a programmer.

#### 2.1.1 Decomposition: Breaking Big Problems into Small Ones

**Socratic Question:** Imagine you want to make a sandwich. How would you break that down into steps?

(Think about it before reading on...)

**Concept:** Decomposition is breaking a big, scary problem into smaller, manageable pieces.

**Real Example:**
Instead of: "Build a quiz game" (overwhelming!)
Break it into:
1. Store quiz questions and answers
2. Ask the user a question
3. Check if their answer is correct
4. Keep score
5. Show final results

**Your Turn:** Think of a task you do daily (getting ready for school, making dinner, etc.). Write down 5-7 steps to decompose it.

---

#### 2.1.2 Pattern Recognition: Spotting What Repeats

**Socratic Question:** Look at this sequence: 2, 4, 6, 8, 10... What comes next? How did you know?

(Try to figure it out before reading...)

**Concept:** Patterns are everywhere. Programmers look for repeating patterns and automate them.

**Real Example:**
Pattern in a greeting:
"Hello Alice"
"Hello Bob"
"Hello Charlie"

Instead of writing 100 separate lines, we can use a pattern:
"Hello [person's name]"

**Your Turn:** Look at your daily schedule. What patterns do you see? (Same time every day? Same type of activity?)

---

#### 2.1.3 Abstraction: Hiding Unnecessary Details

**Socratic Question:** When you use a calculator, do you need to know how it calculates 2+2 internally?

**Concept:** Abstraction means hiding the complicated details so you can focus on what matters.

**Real Example:**
As a user, you don't care *how* Facebook works internally. You just:
- Click a button
- Post a photo
- See your friends' posts

The complicated code is hidden. You only interact with what matters.

**Your Turn:** Think of a tool you use (phone, car, video game). What details are hidden from you? What do you only need to know?

---

#### 2.1.4 Algorithms: Steps to Solve a Problem

**Socratic Question:** If I gave you a shuffled deck of cards and asked you to sort them, what would be your strategy?

**Concept:** An algorithm is a step-by-step procedure to solve a problem. It's like a recipe for code.

**Real Example - Sorting Numbers:**

Problem: Sort [5, 2, 8, 1, 9]

Algorithm (simple approach):
1. Look at the first number
2. Find the smallest number after it
3. Swap them
4. Move to the next number
5. Repeat until done

Result: [1, 2, 5, 8, 9]

**Your Turn:** Write the steps for a simple algorithm: "How would you find your friend in a crowded room?"

---

### Module 2: Python Basics - Learning to Code

Now that you think computationally, let's write code!

#### 2.2.1 Variables: Storing Information

**Socratic Question:** In real life, what's a variable? (Hint: think of a mailbox)

**Concept:** Variables are containers that store information. You can change what's inside.

**Code Example:**

```python
# Create variables
name = "Alice"
age = 16
grade = 10.5

# Use them
print("Hello, " + name)
print("You are " + str(age) + " years old")
```

**Your Turn - Mini Exercise:**
Create variables for:
- Your favorite food
- Your favorite number
- Your favorite color

Then print a sentence using all three.

---

#### 2.2.2 Data Types: Different Kinds of Information

**Concept:** Python stores different types of information differently.

**Common Data Types:**

```python
name = "Alice"           # String (text)
age = 16                 # Integer (whole number)
height = 5.6             # Float (decimal number)
is_student = True        # Boolean (True or False)
```

**Why Does This Matter?**
You can do math with numbers:

```python
x = 10
y = 5
print(x + y)  # 15
```

But not with text the same way:

```python
greeting = "Hello " + "World"  # Works! "Hello World"
math = "10" + "5"              # Doesn't add, just combines: "105"
```

**Your Turn:** Create variables of each type and print them.

---

#### 2.2.3 Control Flow: Making Decisions (If/Else)

**Socratic Question:** In your day, you make decisions. "If it's raining, I take an umbrella. Else, I don't." How does that translate to code?

**Concept:** if/else statements let your code make decisions.

**Code Example:**

```python
age = 16

if age >= 18:
    print("You can vote!")
else:
    print("You're not old enough to vote yet")
```

**Real Mini-Project - Age Checker:**

```python
# Get user input
age = int(input("How old are you? "))

# Make a decision
if age >= 13:
    print("You can have a social media account")
elif age >= 18:
    print("You can vote!")
else:
    print("You're too young for social media")
```

**Your Turn:** Write code that checks if a number is positive, negative, or zero.

---

#### 2.2.4 Loops: Repeating Actions (For/While)

**Socratic Question:** Imagine writing "I will not be late" 100 times as punishment. Would you write it 100 times manually or find a shortcut?

**Concept:** Loops automate repetition.

**Code Example - For Loop:**

```python
# Print numbers 1 to 5
for i in range(1, 6):
    print(i)

# Output:
# 1
# 2
# 3
# 4
# 5
```

**Code Example - While Loop:**

```python
count = 1
while count <= 5:
    print(count)
    count = count + 1
```

**Your Turn - Mini Exercise:**
Write a loop that prints your name 10 times.

---

#### 2.2.5 Functions: Reusable Code Blocks

**Socratic Question:** In math, you have functions like f(x) = 2x + 1. In programming, functions work similarly. Why would you want to reuse code?

**Concept:** Functions let you write code once and use it many times.

**Code Example:**

```python
# Define a function
def greet(name):
    print("Hello, " + name + "!")

# Use the function
greet("Alice")
greet("Bob")
greet("Charlie")

# Output:
# Hello, Alice!
# Hello, Bob!
# Hello, Charlie!
```

**Real Example - Calculator Function:**

```python
def add(a, b):
    result = a + b
    return result

x = add(5, 3)
print(x)  # 8
```

**Your Turn:** Write a function that takes a name and prints a personalized greeting.

---

#### 2.2.6 Lists & Data Structures: Storing Multiple Items

**Socratic Question:** If you need to store 100 student names, would you create 100 variables or use a smarter structure?

**Concept:** Lists let you store multiple items in one place.

**Code Example:**

```python
# Create a list
colors = ["red", "blue", "green", "yellow"]

# Access items (counting starts at 0!)
print(colors[0])  # red
print(colors[2])  # green

# Loop through a list
for color in colors:
    print("I like " + color)
```

**Real Example - Student Scores:**

```python
scores = [85, 92, 78, 95, 88]

# Find the highest score
highest = max(scores)
print("Highest score:", highest)

# Calculate average
average = sum(scores) / len(scores)
print("Average score:", average)
```

**Your Turn:** Create a list of 5 foods you like and print each one.

---

### Module 3: Debugging Methodology

**Socratic Question:** When your code doesn't work, what's your first instinct?

**Concept:** Debugging is a skill. It's not about being smart; it's about being systematic.

#### 2.3.1 The Debugging Process

**Step 1: Read the Error**

```python
name = "Alice
print(name)
```

Error: SyntaxError: unterminated string literal

Translation: "You forgot to close a quote"

**Step 2: Form a Hypothesis**
"I think the problem is the missing quote mark on line 1"

**Step 3: Test It**
Fix the quote and run again:

```python
name = "Alice"
print(name)
```

**Step 4: Verify**
Did it work? Yes! Move on.

#### 2.3.2 Common Errors & What They Mean

```python
# NameError: variable doesn't exist
print(nam)  # You meant 'name' but typed 'nam'

# TypeError: wrong type of data
x = "5"
y = 10
print(x + y)  # Can't add text and number

# IndexError: accessing a list item that doesn't exist
colors = ["red", "blue"]
print(colors[5])  # Only items 0 and 1 exist
```

**Your Turn:** Intentionally break each example above, read the error, and fix it.

---

### Module 4: Project-Based Learning

You've learned the fundamentals. Now build something **real**.

#### 2.4.1 Mini-Project 1: Number Guessing Game

**What You'll Build:** A game where the computer picks a number and you guess it.

**Skills Used:** Variables, loops, if/else, input/output

**Code:**

```python
import random

# Computer picks a number
secret_number = random.randint(1, 100)
guess = 0
attempts = 0

# Loop until user guesses correctly
while guess != secret_number:
    guess = int(input("Guess a number between 1 and 100: "))
    attempts = attempts + 1
    
    if guess < secret_number:
        print("Too low! Try again.")
    elif guess > secret_number:
        print("Too high! Try again.")
    else:
        print("You got it! You took " + str(attempts) + " attempts.")
```

**Your Turn:** Run this code. Then modify it to:
- Allow only 10 attempts
- Give hints like "very close!"

---

#### 2.4.2 Mini-Project 2: Quiz Game

**What You'll Build:** A quiz that asks questions and keeps score.

**Skills Used:** Lists, functions, loops, if/else

**Code:**

```python
def run_quiz():
    questions = [
        {
            "question": "What is the capital of France?",
            "answer": "paris"
        },
        {
            "question": "What is 2 + 2?",
            "answer": "4"
        },
        {
            "question": "What color is the sky?",
            "answer": "blue"
        }
    ]
    
    score = 0
    
    for q in questions:
        user_answer = input(q["question"] + " ")
        if user_answer.lower() == q["answer"]:
            print("Correct!")
            score = score + 1
        else:
            print("Wrong! The answer is " + q["answer"])
    
    print("Your score: " + str(score) + "/" + str(len(questions)))

run_quiz()
```

**Your Turn:** Add more questions to the quiz.

---

#### 2.4.3 Mini-Project 3: Simple Web Scraper

**What You'll Build:** A program that reads data from a website.

**Skills Used:** Functions, lists, loops

**Code:**

```python
import requests
from bs4 import BeautifulSoup

def scrape_quotes():
    url = "http://quotes.toscrape.com/"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    quotes = soup.find_all('span', class_='text')
    
    for i, quote in enumerate(quotes[:5]):
        print(str(i+1) + ". " + quote.text)

scrape_quotes()
```

**Your Turn:** Modify this to scrape a different website or display author names too.

---

## 3. Practice Exercises

**Exercise 1: Temperature Converter**
Write a function that converts Fahrenheit to Celsius. Formula: C = (F - 32) × 5/9

**Exercise 2: List Operations**
Create a list of 5 numbers. Find the highest, lowest, and average.

**Exercise 3: Password Validator**
Write a function that checks if a password is at least 8 characters long and contains a number.

**Exercise 4: Word Counter**
Write a function that takes a sentence and counts how many words are in it.

**Exercise 5: Simple Calculator**
Create a program that asks for two numbers and an operation (+, -, *, /), then performs it.

---

## 4. Project Checkpoint

### Capstone Project: Personal Journal App

**What You'll Build:** A simple program that lets you:
- Write journal entries
- Save them to a file
- Read past entries

**Skills Integrated:**
- Variables and lists
- Functions
- Loops and conditionals
- File I/O (reading/writing files)

**Starter Code:**

```python
def create_entry():
    date = input("Date (YYYY-MM-DD): ")
    content = input("What's on your mind? ")
    entry = date + ": " + content
    return entry

def save_entry(entry):
    file = open("journal.txt", "a")
    file.write(entry + "\n")
    file.close()
    print("Entry saved!")

def view_entries():
    try:
        file = open("journal.txt", "r")
        entries = file.readlines()
        file.close()
        
        for entry in entries:
            print(entry)
    except:
        print("No entries yet.")

while True:
    choice = input("\n1. Write entry\n2. View entries\n3. Exit\nChoose: ")
    
    if choice == "1":
        entry = create_entry()
        save_entry(entry)
    elif choice == "2":
        view_entries()
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid choice")
```

**Your Turn:** Extend this with:
- Delete an entry
- Search for entries by date
- Edit past entries

---

## 5. Spaced Repetition Quiz

**Take this quiz before moving on. These are concepts you've seen before.**

### Quiz Questions:

**Q1: What does decomposition mean in programming?**
A) Breaking a problem into smaller pieces
B) Deleting code
C) Writing very simple code
D) Commenting your code

**Q2: Which of these is a valid Python variable name?**
A) 2fast
B) my-age
C) my_age
D) my age

**Q3: What will this code print?**
```python
x = 10
if x > 5:
    print("big")
else:
    print("small")
```
A) "big"
B) "small"
C) "big small"
D) Nothing

**Q4: How many times will this loop run?**
```python
for i in range(1, 5):
    print(i)
```
A) 4 times
B) 5 times
C) 1 time
D) 6 times

**Q5: What does a function do?**
A) Performs math only
B) Lets you reuse code by giving it a name
C) Stores data
D) Creates loops

**Q6: What's wrong with this code?**
```python
colors = ["red", "blue", "green"]
print(colors[3])
```
A) Lists don't exist in Python
B) You can't print a list item
C) Index 3 doesn't exist (only 0, 1, 2)
D) Nothing is wrong

### Answers:
Q1: A | Q2: C | Q3: A | Q4: A | Q5: B | Q6: C

**Score yourself:** 5-6 correct = Ready for advanced! 3-4 = Review a module. Less than 3 = Go back and practice more.

---

## 6. Resources & Next Steps

### Practice Platforms
- **Codecademy** (codecademy.com) — Interactive Python tutorials
- **LeetCode** (leetcode.com) — Coding challenges
- **HackerRank** (hackerrank.com) — Practice problems by difficulty

### Books
- "Automate the Boring Stuff with Python" by Al Sweigart (free online)
- "Think Python" by Allen Downey

### YouTube Channels
- Corey Schafer (thorough Python tutorials)
- Tech With Tim (beginner-friendly)
- Crash Course Computer Science (understand how computers work)

### Communities
- r/learnprogramming (Reddit) — Supportive community
- Stack Overflow — Find answers to specific questions
- GitHub — See how real programmers code

### What Comes Next?
Once you master Python basics:
1. **Learn a framework:** Django (web), Flask (web), Pygame (games)
2. **Learn another language:** JavaScript (web), Java (business), C++ (systems)
3. **Specialize:** Web development, data science, machine learning, game development
4. **Contribute:** Open source projects on GitHub

### Final Thought
You've learned to code. The real learning happens when you **build things you care about**. Pick a project, struggle with it, debug it, and ship it. That's where the magic happens.

**Happy coding!**

---

Skill Version: 1.0
Last Updated: April 2, 2026
Author: ayeshawadoodkhan2-svg

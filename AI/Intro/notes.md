# Intro to Artificial Intellignece
link: https://www.youtube.com/watch?v=JMUxmLyrhSk&list=PLbYOMPK70mxpvCXIY9wFhC9zbimybQD6z&index=40&t=297s

## What is AI?
theory and development of computer systems able to perform tasks normally requiring human intelligence such as visual perception, speech recognition, decision-making and translation between languages

### Applications:
Search Engine, Scanning Dcouments, etc

## Types of AI
### Artificial Narrow Intelligence
- aka weak AI, involves applying AI to only specific tasks

Ex. Self driving cars, Alexa

### Artificial General Intelligence
- aka strong AI, macines that possess the ability to perform any intelletual task that a human can

### Artificial Super Intelligence
- when computers will surpass humans 

## Machine Learning
Gives computers the ability to learn from experience without being explicitly programmed, a subset of AI

Def:
- **algorithms**: a set of rules and statistical techniques used to learn patterns from data
- **model**: a model is trained by using a Machine Learning Algorithm
- **predictor variable**: it is a feature of data that can be used to predict the output
- **response variable**: it is the feature or the output variable that needs to be predicted by using the predictor variable
- **training data**: the machine learning model is buit using the training data
- **testing data**: machine learning model is evaluated using testing data
### machine learning process
1. define the objective of the problem
2. data gathering
3. preparing data/cleaning data
4. exploratory data analysis
5. building a maching learning model
6. model evaluation and optimization
7. predictions

### Supervised Learning
a technique in which we teach or train the machine using data which is well labelled
- use labelled data and labelled output

### Unsuperized Learning
- the training of machine using information that is unlabeled and allowing the algorithm to act on that information without a guidance

### Reinforcement Learning
- a part of machine learning where an agent is put in an environment and he learns to behave in this environment by performing certain actions and observing the rwards which it gets from those actions

|       | Supervised Learning | Unsupervied Learning | Reinforcement Learning
| ----- | ----------- | --- | --- |
| Definition  | machine learns by using labelled data | machine trained on unlabelled data without guidance | an agent interacts wth its environment by producing actions & discovers errors or reward
| Type of problems   | regression & classification | Assocaition and Clustering | Reward based |
| Type of Data  | Labelled data | Unlabelled data | No pre-defined data |
| Training   | external supervision | no supervision | no supervision |
| Approach  | map labelled input to known output | understand patterns and discover output | follow trial and error method |
| Popular Algorithms   | linear regression, logistic regression, support vector machine, KNN, etc | K-means, C-means, etc | Q-learning, SARSA, etc

## Types of Problems
### Regression
- supervised learning
- output is a continuous quantity
- main aim is to forecast or predict
- main aim is to forecast or predict
- algorithm: linear regression

### Classification
- supervised learning
- output is a categorical quantity
- main aim is to compute the category of the data
- Algorithm: Logistic Regression

### Clustering
- Unsupervised learning
assigns data points into clusters
- main aim is to group similar items clusters
- Algirthm: K-means

## Linear Regression
- a method to predict dependent variable Y based on values of independent variables (X). It can be used for the cases where we want to predict some continuous quantity.

## Classification Algorithms
### Logistic Regression
- a method used to predict a dependent variable, given a set of independent variables, such that dependent variable is categorical

### Decision Tree
supervided machine learning algorithm which looks like an inverted tree, wherein each node represents a predictor variable, the link between the nodes represetns a Decision and each leaf node represents an outcome(response variable)
- **Root Node**: the starting point of a tree
- **Internal Nodes**: Each internal node represents a decision point (predictor variable) that eventually leads to the prediction of the outcome
- **Leat/Terminal Nodes**: Leaf nodes represent the final class of the outcome and therefore they're aso called terminating nodes
- **Branches**: connections between nodes, they're represented as arrows. Each branch represents a response such as yes or no
- **ID3 algorithm**

**Step 1**: Select Best Attribute (A)
- select the variable that best separates the data with **entropy** and **Information Gain**
- **Entropy** - mesasures the impurity or uncertainty present in the data
$$\sum_{i=1}^n-p_ilog_2(p_i)$$
- **Information Gain** - indicates how much information a particular feature/variable gives us about the final outcome
    - Information Gain = entropy(parent) - [weighted average] * entropy(children)

**Step 2**: Assign A as a decision variable for the root node

**Step 3**: For each value of A, build a descendant of the node

**Step 4**: Assign classification labels to the leaf node

**Step 5**: If data is correctly classified, Stop

**Step 6**: Else: Iterate over the tree

### Random Forest
- builds multiple decision trees and glue them together to get a more accurate and stable prediction
- more accurate, avoid overfitting, bagging

**Step 1**: Create a Bootstrapped Data Set
- estimation method used to make predictions on a data set by re-sampling it

**Step 2**: Creating Decision Trees
- Build a Decision Tree by using the bootstrapped data set
- Begin at the root node & choose the best attribute to split the data set
- repeat the same process for each of the upcoming branch nodes

**Step 3**: Go back to Step 1 and Repeat
- each decision tree predicts the output class based on the respective predictor variable used in that tree
- go back to step 1, create a new bootstrapped data set and then build a Decision Tree by considering only a subset of variables at each step
- this iteration is performed 100's of times, creating multiple decision trees

**Step 4**: predicting the outcome of a new data point
- To predict whether a new patient has heart disease or not, run the new data down the decision trees
- after running the data down all the trees in the random forest, we check which class got the majority vote

**Step 5**: Evalutae the Model
- In a real-world problem, about 1/3rd of the original data set is not included in the bootstrapped data set
- this sample data set that does not include in the bootstrapped data set is known as the Out-Of-Bag data set
- we can measure the accuracy of a Random Forest y the proportion of OOB samples that are correctly classified

### Naive Bayes
- based on Bayes Theorm that is used to solve classification problems by following a probabilistic appraoch
- It is based on the idea that the predictor variable in a Machine Learning model are independent of each other

$$P(H|Multiple Evidence) = P(C1|H)*P(C2|H)...*P(Cn|H) * P(H) / P(Multiple Evidence) $$

### KNN,K Nearest Neighbour
- a supervised learning algorithm that classifies a new data point into the target class, depending on the features of it's neighbouring data 
- for each added data point, compare it to the K nearest neighbor and classify it into the most similar group

### Support Vector Machine, SVM
- a supervised classification method that separates data using hyperplanes
- draw a hyperplane, a decision boundary that divide classes, best hyerplane has the maximum margin to the closest data points

### K-Means Clustering
objects are classified into a predefined number of groups so that they are as much dissimilar as possible from one group to another gorup, but as much similar as possible within each group

1. decide the number of clusters to be made
2. provide centroids of all the clusters
3. the Algorithm calculates Euclidian distance of the points from each centroid and assigns the point to the closest cluster
4. next the Centroids are calculated again, when we have our new cluster
5. the distance of the points from the centre of clusters are calculated again and points are assigned to the closest cluster
6. and then again the new centroid for the cluster is calculated
7. these steps are repeated until we have a repetition in centroids or new centroids are very close to the previous one

**The Elbow Method**
- used to find the optimal K value for values of the problems
- first compute the sum of squared error for some values of k. The SSE is defined as the sum of the squared distance between each member of the cluster and its centroid. 

## Reinforcement Learning
2 main components:
- Agent - the RL algorithm that learns from trial and error
- Environment - the world through which the agent moves

### Terminology:

Action(A): All the possible steps that the agent can take

State(S): current condition returned by the environment

Reward(R): an instant return from the environment to appraise the last action

Policy(pi): the appraoch that the agent uses to determine the next action based on the current state

Value(V): the expected long-term return with discount, as opposed to the short-term reward R

Action-value(O): this similar to Value, except it takes an extra parameter, the current action(A)

### Reward Maximization
- a RL agent must be trainedi n such a way that he takes the best action so that the reward is maximum

**Expoitation** - using the already known exploited information to heighten the rewards

**Exploration** - exploring and capturing more information about an enviornment

### Markov's Decision Propess
- mathematical approach for mapping a solution in reinforcement learning

The following parameters are used:
- set of actions, A
- set of states, S
- Reward, R
- Policy, pi
- Value, V

Agent -- action --> Environment -- reward + state --> Agent

### Q-Learning
a model-free, off-policy reinforcement learning that will find the best course of action, given the current state of the agent. example walk through: https://www.youtube.com/watch?v=JMUxmLyrhSk&t=11500s
- R matrix: used to represent reward where 
    - rows is state
    - columns is action
    - cell is reward value
- Q matrix: represent the memory of what the agent has learned through experience:
    - row is state
    - cols is possible actions leading to the next state
    - formula to calculate the Q matrix:
$$Q(state, Action) = R(state, action) + Gamma * Max[Q(next state, all actions)]$$
Gamma parameter has a range of 0 - 1
- if close to zero, the agent tend to consider only immediate rewards
- if close to 1, the agent will consider future rewards with greater weight

### Algorithm:
1. set the gamma parameter and environment rewards in matrix R
2. initialize matrix Q to zero
3. select a random initial state
4. set initial state = current state
5. select one among all possible actions for the current state
6. using this possible action, consider going to the next state
7. get maximum Q value for this next state based on all possible actions
8. computer Q(state, action) = R(state, action) + Gamma * Max[Q(next state, all actions)]
9. repeat above steps until current state = goal state

## AI vs ML vs DL
- AI - technique that enables machine to mimic human behavior
- ML - subset of AI that uses statistical methods to enable machines to improve with experience
- DL - subset of ML which make computation of multi-layer neural network feasible

## Limitation of ML
can't handle high dimensional data, aka lots of parameters

problem with **feature extraction** - the process of transforming raw data into numerical features that can be processed while preserving the information in the original data set

## Deep Learning
focus on the right features by themselves, requiring little guidance from the programmer. These models partially solve the dimensionality problem

### What is it?
a collection of statistical machine learning techniques used to learn features hierarchies based on the concept of artificial neural networks

### Single-layer perceptron
- **Perceptron** - aka artificial Neuron, a linear model used for binary classification. It models neuron which has a set of inputs, each of which is given a specific weight. The input is processed through a summation/processing element, and then through an **activition function** which map the input to the correct output. 
- single-layer has no hidden layer, so we can't classify non-linearly separable data (a line or hyperplane cannot separate the data points into 2 classes) 

### Multilayer Perceptron
has the same structure of a single layer perception but with one or more hidden layers and is thus considered a deep neural network
- the weights between the nodes are the primary means of long-term information storage in neural networks
- updating the weights is the primary way the neural network learns new information
- a set of inputs are passed to the first hidden layer, the activations from that layer are passed to the next layer and so on, until you reach the output layer

**Backpropagation Algorithm**:
- most common supervised learning method for multilayer perceptron
- after calculating the weighted sum of inputs and passing them through the activation function we propagate backwards and update the weights to reduce the error (desired output - model output)

### Limitation of Feed Forward Network
- a trained feedforward network can be exposed to any random collection of photographs, and the first photograph it is exposed to will not necessarily alter how it classifies the second one
- but we need the previous data to help predict future data, like reading a book you need to understand the previous works
- solution: recurrent neural network
## Recurrent Neural Network
- a type of artificial neural network designed to recognize patterns in sequences of data, such as text, genomes, handwriting, the spoken word, or numerical times series data emanating from sensors, stock markets and government agencies

## Convolutional Neural Network
- the neuron in a layer will only be connected to a small region of the layer before it, instead of all of the neurons in a fully-connected manner

## Natural Language Processing
-  It helps machines process and understand the human language so that they can automatically perform repetitive tasks.

### Text Minig
- use NLF to derive high quality information from the text

**Tokenization** - process of splitting the whole data into smaller chunks

**stemming**

**lemmitization**

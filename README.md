#######################################################

In search_canvas.html, we set the default algorithm as A-star, scene = misc,
we can set different algorithm by changing search_alg by ?search_alg="RRT" for RRT algorithm. Similarly, I can set different scene by ?planning_scene = "misc". 

Here is one link example:
file:///Users/chaochen/Desktop/algorithm_/search_canvas.html?search_alg=RRT

Here are the Scenes:
    //planning_scene = "empty";
    //planning_scene = "misc";
    //planning_scene = "narrow1";
    //planning_scene = "narrow2";
    //planning_scene = "three_sections";

Here are the algorithms:
    //search_alg = "depth-first";   
    //search_alg = "breadth-first";  
    //search_alg = "greedy-best-first";  
    //search_alg = "A-star";  
    //search_alg = "RRT";  
    //search_alg = "RRT-connect";  
    //search_alg = "RRT-star";  

In search_canvas_balancedtree.html, instead of using minheap, balance tree is used. The way of running the code is the same as search_canvas.html.

Please check some analysis in the result along with the video demo for A-Star algorithm.


Contribution:
1. Develop all the algorithms, BFS, DFS, greedy, A-star, RRT, RRT-Connect, RRT-star and so on.
2. Implement AVL balance tree to replace minheap tree.

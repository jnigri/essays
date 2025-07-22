---
title: How to test code?
draft:
---
Remember that you have to maintain tests.  
Keep code simple. Keep tests simpler.  
Avoid abstractions in code. Ban them in tests.

Do not seek high coverage.  
Think about return on investment (ROI).   
Test the logic, not the configurations.  
Test the thinking, not the plumbing.  
Test what decides, not what connects.  

Do not modify your code because of your tests.  

Test depending on the number of dependencies.  
Core code needs more tests.  
Leaf code needs fewer.

Never ship untested code.  
Test automation is optional. Testing isn't.

Take a step back.  
Imagine you open the application.  
You click here and there.  
Make sure that this and that work.  
Automate this test.  
This test has great value.  
Run it every day or every hour.  
Maintain it.  
Make sure you are alerted if it fails.
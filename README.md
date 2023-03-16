# Click Counter with useReducer Hook from React Native

Before you start this project, make sure you have gone through the Introduction to UseReducer page (https://piped.hostux.net/watch?v=8C6NP1Qsi9I). You will create a project similar to the one in that introduction.

The useReducer hook is very helpful for exposing the state of multiple pieces of data, or where the state is determined with dependencies on other pieces of state. That complexity makes it hard to find a project that practices the concept fully. In this project, you will use the useReducer hook for a single piece of state, a counter, to convert the React project in the Introduction video to a React Native project.

If you were on a shopping site, ordering an item, you need to specify the quantity of that item you want to purchase. That uses a click counter, where one button adds to the count and another button decreases that amount. In this project, you will use 3 buttons, one to increment, one to decrement, and one to reset the counter. The results look like this:

![clickReducer.PNG](https://github.com/bell-kevin/useReducerClickCounter/blob/main/clickReducer.PNG)

The background cannot be white; the 3 buttons must each have a different color -- the colors are your choice, make sure the text is clearly visible (no black text on dark blue background, for example). The number displays the current count.

Use the useReducer hook with action "type" for the 3 buttons, and "dispatch" for the onPress event of the buttons to send that action type to the reducer. Use the payload parameter in the dispatch, and use that payload value in the switch statement that changes the state of the counter. No payload is needed for the reset button.

Take a screenshot of the screen after pressing the Add button a few times (as above). Take another screenshot after pressing the Remove button so that there is a negative number. 

 

Submission: Zip together the root folder and the 2 screenshots, and submit the single zipped folder.

## How to:

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

https://reactnative.dev/docs/intro-react

Check out App.js here in the code files for the computer algorithm code.

## Storing Projects

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)

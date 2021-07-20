### What are the ways of evaluating FE performance?

We can use metrics tools such as  Core Web Vitals, Lighthouse, etc. We can check image loading, font loading, and render time in general. Use chrome browser with painting highlighting to understand if there are some painful re-render happens. Metrics will help to understand which part of FE can be improved.

---
 ### What are the tools that are essential in developing FE applications with high quality?
 - Testing
 - Linting
 - Typescript (not all the time)
 - Documentation, definitions
 - Rituals
 - Easy access to code base
 - Scrum (or any other managment framework)
 - Continious Integration
 - Version Control
 - Monitoring
 - User Feedback
---
### What are the different ways of rendering pages and what are the use-case/pros and cons for each one?

Each way of rendering can be applied for different type of project:

1) Client Side Rendering
  - Use Cases:
    - Small applications, 
    - Hybrid Applications, 
    - Intensive DOM manipulation

    Pros:
      - Easy deployable and cheaper to keep it online
      - Keeping server side less busy and cheaper to maintain
    Cons:
      - Not SEO friendly
      - Pure user experience and pure perfomance (depends on app and how it were written)

2) Server Side Rendering
  - Use Cases:
     - Heavy applications
     - SEO required

    Pros:
      - Easy SEO
      - Making user machine less busy (better user experience)
    Cons:
      - Can be costy
      - Required more experienced developers

3) Static Side Rendering 
  - Use Cases:
     - Big amount of Similliar content pages
     - Focus on SEO
     - Projects with lower budget 

    Pros:
      - Lower Cost
      - SEO Friendly
      - Great Perfomance
    Cons:
      - It's required perfect deployemnt mechanism

   

---
### How can we ensure that FE is working well in production?

- Setup a proper quality pipeline. You can start with important linting rule and min test coverage (maybe extra check on performance) in code and check it on every commit or pull request. 
- Make code review before merging to environment
- Setup enviroments (dev->test->acc->prod)
- Create an environment preview for each feature to give easy access to QA. 
- QA will do a  proper test and will approve that the feature can be merged to the next environment.
- On acc env product owner can approve the feature before moving it to prod.
- It is necessary to set up easy fallback production in case that all checks and steps will be failed.


---
### What are the parameters to take into account before adding a new library to the project?

- Is it maintained or not
- Last commit to repository of library
- Ammount of opened issues
- Code quality
- Amount of depedncies of this library
- Covered it with test or not 
- Git hub Stars :)

--- 
### Choose one component from CheapTickets.nl and explain what information do you need in order to be able to implement that component.
![https://ibb.co/HzxpvQZ](https://i.ibb.co/ncn82Sp/Screenshot-2021-07-20-at-23-09-47.png)

1) Figma (or any other type of design sheet)
2) Api Documentation
3) Redirect links 
4) Which elements hoverable
5) Image specs
6) All information is static ? Or some elements on component can be dynamicly updated on already rendered component? 
7) Use cases
8) Acceptance criteria
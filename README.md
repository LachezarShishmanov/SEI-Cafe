Project Name SEI-Cafe

This was a project I had to do for my Software engineering bootcamp. It took me a week to build it. It was challenging but I'm happy I was able to build all the functionalities I wanted. Its deployed to Herokou

App Breakdown

1. config/
         checkToken.js
         database.js
         ensureLoggedIn.js
 2. controllers/
      api/
         items.js
         orders.js
         users.js
 3. models/
         category.js
         item.js
         itemSchema.js
         order.js
         user.js
         readme.md
  4. public/
         favicon.ico
         index.html
         logo*.png
         manifest.json
         robots.txt
   5. routes/
        api/
          items.js
          orders.js
          users.js
   6. src/
       components/
        CategoryList/
          CategoryList.jsx
          CategoryList.module.css
        LineItem/
          LineItem.jsx
          LineItem.module.css
        LoginForm/
          LoginForm.jsx
          LoginForm.module.css
        Logo/
          Logo.jsx
          Logo.module.css
        MenuList/
          MenuList.jsx
          MenuList.module.css
        MenuListItem/
          MenuListItem.jsx
          MenuListItem.module.css
        OrderDetail/
          OrderDetail.jsx
          OrderDetail.module.css
        OrderList/
          OrderList.jsx
          OrderList.module.css
        OrderListItem/
          OrderListItem.jsx
          OrderListItem.module.css
        SignUpForm/
          SignUpForm.jsx
          SignUpForm.module.css
        UserLogOut/
          UserLogOut.jsx
          UserLogOut.module.css
        pages/
          App/
           App.jsx
           App.module.css
       AuthPage/
           App.jsx
           App.module.css
       NewOrderPage/
           NewOrderPage.jsx
           NewOrderPage.module.css
       OrderHistoryPage/
           OrderHistoryPage.jsx
           OrderHistoryPage.module.css
      utilities/
         items-api.js
         order-api.js
         send-request.js
         users-api.js
         users-service.js
     index.css
     index.js
7. .gitignore
8. README.md
9. server.js
# Movie search API   

#### Installera   
Börja med att installera dependencies:    
npm install   
      
#### Köra testerna   
npm run test

#### Köra EsLint   
npm run lint    

#### Starta applikationen   
Applikationen och databasen kan köras på localhost eller i docker. 
Det enklaste är att köra både applikation och databas i docker.

för att köra igång kör:    
docker-compose build   
docker-compose up    

#### API Endpoints   
###### Söka film    
http://localhost:3000/movie?search=the+terminator   
Byt ut the terminator till önskad film    
    
###### Få logg med tidigare sökningar    
alla sökningar    
http://localhost:3000/searchlog    
   
top 100   
http://localhost:3000/searchlog/topresult     



  

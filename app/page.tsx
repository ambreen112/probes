import Display from "./components/page"


export default function Home(){
  return(
       
<div className="mt-12">
        
        <Display name ="Pakistan" capital ="Islamabad" population ="Twofourty million" flag="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flig.jpg/220px-Flig.jpg" website="https://www.britannica.com/place/Pakistan"/> 
        <Display name="Turkey" capital="Istambul" population="Eightyfive million" flag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGZkqveASh_bVQ3_hifQnmpwG2OiGqahk_A&s" website="https://en.wikipedia.org/wiki/Turkey"/>
        <Display name="Iran" capital="Tehran" population="Eighteen million" flag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6PD5EG_QmhokbsZfOCBKj802PP9hew2hcg&s" website="https://en.wikipedia.org/wiki/Iran"/>
        <Display name="Iraq" capital="Baghdad" population="sixty million" flag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssb7CwKXxF5KMxIuzuloeUL5VZTW0giUCbw&s" website="https://en.wikipedia.org/wiki/Iraq#Economy"/>
        <Display name="Saudi Arabia" capital="Riyadh" population="Sixteen million" flag="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtN5hiALvD7ECq4exviEqbXerUKLHWXqFklA&s" website="https://en.wikipedia.org/wiki/Saudi_Arabia"/>
        
       </div>
       
  )
}
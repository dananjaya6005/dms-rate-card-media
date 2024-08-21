//@ts-nocheck
import React ,{useMemo, useState} from "react";
import Lottie from "lottie-react";
import testLottie from "./assets/lottie/lottieflow-arrow-08-1-000000-easey.json";
import dmsLogo from './assets/dms-logo.svg';
import media1 from './assets/lottie/lottieflow-multimedia-8-7-F05239-easey.json';
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import media2 from './assets/lottie/lottieflow-multimedia-8-6-F05239-easey.json';
import media3 from './assets/lottie/lottieflow-multimedia-8-7-F05239-easey.json';
import media4 from './assets/lottie/lottieflow-multimedia-8-8-F05239-easey.json';
import media5 from './assets/lottie/lottieflow-multimedia-8-11-F05239-easey.json';
import media6 from './assets/lottie/lottieflow-cta-09-F05239-easey.json';
import media7 from './assets/lottie/lottieflow-menu-nav-11-11-F05239-easey.json';
import media8 from './assets/lottie/lottieflow-multimedia-8-3-F05239-easey.json';
import media9 from './assets/lottie/lottieflow-multimedia-8-2-F05239-easey.json';
import media10 from './assets/lottie/lottieflow-multimedia-8-13-F05239-easey.json';
import media11 from './assets/lottie/lottieflow-chat-17-13-F05239-easey.json';
import media12 from './assets/lottie/Animation - 1724215376584.json';
import media13 from './assets/lottie/Animation - 1724222091640.json';
import media14 from './assets/lottie/Animation - 1724222279280.json';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./components/ui/button";
import axios from "axios";
import techUseimg from './assets/techuse.png';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"


const ListOfMedia = [
  {
    title: "Protrait",
    specs: "Specefications",
    lottie: media1,
    price : 55000,
    sub :[],
    optionalFeatures : [],
  },

  {
    title: "Landscape Video",
    specs: "Specefications",
    lottie: media5,
    price : 150000,
    sub :[],
    optionalFeatures : [
      {
        name : 'Full HD',
        price : 5000,
        default : true
      },
      {
        name : '4K',
        price : 10000,
        default : false
      }
    ],
  },
  {
    title: "Photography",
    specs: "Specefications",
    lottie: media8,
    price : 20000,
    sub :[],
    optionalFeatures : [],
  },
  {
    title: "Intro & Outro",
    specs: "Specefications",
    lottie: media10,
    price : 10000,
    sub :[],
    optionalFeatures : [],
  },
  {
    title: "Logo Animation",
    specs: "Specefications",
    lottie: media11,
    price : 25000,
    sub :[],
    optionalFeatures : [],
  },
  {
    title: "Drone Video",
    specs: "Specefications",
    lottie: media14,
    price : 40000,
    sub :[],
    optionalFeatures : [],
  },


]

export default function App() {
  const { toast } = useToast()

  const [orderTotal, setOrderTotal] = useState(0);
  const [priceforPortait, setPriceforPortait] = useState(0);
  const [priceforLandScape, setPriceforLandScape] = useState(0);
  const [priceforPhotography, setPriceforPhotography] = useState(0);
  const [priceforIntro, setPriceforIntro] = useState(0);
  const [priceforLogo, setPriceforLogo] = useState(0);
  const [priceforDrone, setPriceforDrone] = useState(0);
  const [submitbtn, setSubmitbtn] = useState(true);


  const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [whatsapp , setWhatsapp] = useState('');
  const [orderReq , setOrderReq] = useState('');
  const [customReq , setCustomReq] = useState('');
  



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: testLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  const handleSubmit = async () => {
    axios.post('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY0MDYzZTA0MzU1MjZmNTUzMTUxMzEi_pc', {
      "name": name,
      "phone": phone,
      "whatsapp" : whatsapp,
      "orderReq" : orderReq,
      "custom_req" : customReq,
      "total" : priceforDrone + priceforLogo + priceforIntro + priceforPhotography + priceforLandScape + priceforPortait
    })
    toast({
      description: "Your order has been sent.",
    })

    setTimeout(() => {
      window.location.reload();
    }, 2000)
  }

  useMemo(() => {

    if(name.length ==0 && phone.length == 0 && orderReq.length == 0 && customReq.length == 0){
      setSubmitbtn(true)
    }else{
      setSubmitbtn(false)
    }

  }, [ name , phone , whatsapp , orderReq , customReq])

  return (
    <> 




    <Toaster />
      <div className="max-w-[1100px] mx-auto py-10 bg-white  min-h-screen flex flex-col">
        <div>
          <div className=" max-[1000px]:scale-90 ">
            <h3 className="text-2xl font-bold  text-[#F05239]">DIGITAL MEDIA STUDIO</h3>
            <p className="text-[#F05239]">Powered by</p>
            <img src={dmsLogo} alt="DMS Logo" className="w-18 h-auto " />
          </div>

        <div className="my-10 max-[1000px]:ml-5 max-[1000px]:my-4">
          <h3 className="text-lg font-medium">Instructions</h3>
          <h6 className="text-zinc-500">Breif</h6>
        </div>

        <div className="flex w-full max-[1000px]:flex-col max-[1000px]:scale-90  max-[1000px]:-mt-20">
          <div className="w-[60%] max-[1000px]:w-screen py-10  mr-5 rounded-xl shadow-xl ">
            
            {ListOfMedia.map((item , index )=>{
              return(
              <div>
              <div className=" flex my-6  justify-between px-14 max-[500px]:px-4 items-center ">
      
                <div className=" flex" >
                 <div className="max-w-12 max-h-12 ">
                   <Lottie 
                     animationData={item.lottie}
                     loop={defaultOptions.loop}
                     autoplay={defaultOptions.autoplay}
                     rendererSettings={defaultOptions.rendererSettings}
                   />
                 </div>
                 <div className="flex flex-col ml-10">
                   <h2 className="text-xl  font-medium" >{item.title}</h2>
                   <h6 className="text-sm text-zinc-600">{item.specs}</h6>
                 </div>
   
                </div>

           

               
               <Checkbox 
                onCheckedChange={(checked)=>{
                  if(checked){
                    setOrderTotal(orderTotal + item.price)
                    setOrderReq(orderReq.concat(` / ${item.title}`))

                  }else{
                    setOrderTotal(orderTotal - item.price);
                    setOrderReq(orderReq.replace(` / ${item.title}` , ''));
                  }
                  
                  if(checked && item.title === "Protrait"){
                    setPriceforPortait(item.price)
                  }else if(!checked && item.title === "Protrait"){
                    setPriceforPortait(0)
                  }

                  if(checked && item.title === "Landscape Video"){
                    setPriceforLandScape(item.price)
                  }else if(!checked && item.title === "Landscape Video"){
                    setPriceforLandScape(0)
                  }

                  if(checked && item.title === "Photography"){
                    setPriceforPhotography(item.price)
                  }else if(!checked && item.title === "Photography"){
                    setPriceforPhotography(0)
                  }

                  if(checked && item.title === "Intro & Outro"){
                    setPriceforIntro(item.price)
                  }else if(!checked && item.title === "Intro & Outro"){
                    setPriceforIntro(0)
                  }

                  if(checked && item.title === "Logo Animation"){
                    setPriceforLogo(item.price)
                  }else if(!checked && item.title === "Logo Animation"){
                    setPriceforLogo(0)
                  }

                  if(checked && item.title === "Drone Video"){
                    setPriceforDrone(item.price)
                  }else if(!checked && item.title === "Drone Video"){
                    setPriceforDrone(0)
                  }
                 
                }}
                className="w-6 h-6 border-2 rounded-md border-orange-700 data-[state=checked]:bg-orange-700" id="2"/>
   
               </div >

              {item.optionalFeatures.length >0 && (
                <>
                     <ToggleGroup defaultValue="Full HD"  onValueChange={(value)=> {

                        if(priceforLandScape > 0){
                          setOrderReq(orderReq.concat(` / ${value}`))
                        }

                     } }  className=""  type="single">
                       <ToggleGroupItem   className="w-32 shadow-xl data-[state=on]:bg-[#F05239] data-[state=on]:text-white " value="Full HD">Full HD</ToggleGroupItem>
                       <ToggleGroupItem className="w-32 shadow-xl data-[state=on]:bg-[#F05239] data-[state=on]:text-white" value="4K">4K</ToggleGroupItem>
                    </ToggleGroup>

                    <div className="flex items-center my-4  ml-20 ">
                     
                      <Lottie 
                        className="w-8 h-8"
                        animationData={media2}
                        loop={defaultOptions.loop}
                        autoplay={defaultOptions.autoplay}
                        rendererSettings={defaultOptions.rendererSettings}
                        height={100}
                        width={100}
                      />
                     
                      <p className=" text-sm text-zinc-500 font-medium ml-8 ">Voice Over</p>
                    </div>

                    <div className="flex items-center my-4  ml-20 ">
                     
                     <Lottie 
                       className="w-8 h-8"
                       animationData={media6}
                       loop={defaultOptions.loop}
                       autoplay={defaultOptions.autoplay}
                       rendererSettings={defaultOptions.rendererSettings}
                       height={100}
                       width={100}
                     />
                    
                     <p className="  text-sm  text-zinc-500 font-medium ml-8 ">Color Grading</p>
                   </div>

                   <div className="flex items-center my-4  ml-20 ">
                     
                     <Lottie 
                       className="w-8 h-8"
                       animationData={media7}
                       loop={defaultOptions.loop}
                       autoplay={defaultOptions.autoplay}
                       rendererSettings={defaultOptions.rendererSettings}
                       height={100}
                       width={100}
                     />
                    
                     <p className="  text-sm text-zinc-500 font-medium ml-8 ">Editing</p>
                   </div>


                   
                   <div className="flex items-center my-4 ml-20 ">
                     
                     <Lottie 
                       className="w-8 h-8"
                       animationData={media4}
                       loop={defaultOptions.loop}
                       autoplay={defaultOptions.autoplay}
                       rendererSettings={defaultOptions.rendererSettings}
                       height={100}
                       width={100}
                     />
                    
                     <p className="  text-sm text-zinc-500 font-medium ml-8 ">Background Music </p>
                   </div>
                </>

              ) }
               
            
               </div>


              )
            })}

            <section className="mt-20">
            <Input className="w-[94%]   m-5" placeholder="Your Name" onChange={(e)=> setName(e.target.value) }/>
            <Input className="w-[94%]   m-5" placeholder="Contact Number" onChange={(e)=> setPhone(e.target.value)} />
            <Input className="w-[94%]   m-5" placeholder="Whatsapp Number (optioanl)" onChange={(e)=> setWhatsapp(e.target.value)} />
            </section>

           <p className="text-lg text-zinc-900 font-medium p-7" >Custom requirements</p>
        <Textarea className="w-[94%] h-32  m-5" onChange={(e)=>{ setCustomReq(e.target.value)}} placeholder="" />
        <Button disabled={submitbtn} onClick={handleSubmit} className="h-12 w-36 mx-5 flex  bg-[#F05239] duration-500 hover:bg-[#e6604b] text-white font-medium" >Submit</Button>
          </div>
          <div className="w-[40%] max-[1000px]:w-screen max-[1000px]:mt-24 rounded-xl shadow-xl">
            <p className=" font-bold text-lg p-7  " >Order Summary</p>
            <hr className="mx-6"/>

             <div className="my-6" >
                <div className=" flex my-2 justify-between px-10">
                  <p className="text-lg text-zinc-900 font-medium " >Portrait Video</p>
                  <p className="text-lg text-zinc-900 font-medium ">{priceforPortait}</p>
                </div>

                <div className=" flex my-2 justify-between px-10">
                  <p className="text-lg text-zinc-900 font-medium " >Landscape Video</p>
                  <p className="text-lg text-zinc-900 font-medium ">{priceforLandScape}</p>
                </div>

                <div className=" flex my-2 justify-between px-10">
                  <p className="text-lg text-zinc-900 font-medium " >Photography</p>
                  <p className="text-lg text-zinc-900 font-medium ">{priceforPhotography}</p>
                </div>

                <div className=" flex my-2 justify-between px-10">
                  <p className="text-lg text-zinc-900 font-medium " >Intro & Outro</p>
                  <p className="text-lg text-zinc-900 font-medium ">{priceforIntro}</p>
                </div>

                <div className=" flex my-2  justify-between px-10">
                  <p className="text-lg text-zinc-900 font-medium " >Logo Animation</p>
                  <p className="text-lg text-zinc-900 font-medium ">{priceforLogo}</p>
              </div>

              <div className=" flex my-2 justify-between px-10">
                  <p className="text-lg text-zinc-900 font-medium " >Drone Video</p>
                  <p className="text-lg text-zinc-900 font-medium ">{priceforDrone}</p>
              </div>

              <hr className="mx-6 my-6"/>

              <div className=" flex my-2 justify-between px-10">
                  <p className="text-lg text-zinc-900= font-medium " >Total</p>
                  <p className="text-lg text-[#F05239] font-medium ">Rs. { 
                     priceforDrone + priceforLogo + priceforIntro + priceforPhotography + priceforLandScape + priceforPortait
                  }</p>
              </div>
              
                
             </div>


            </div>
        </div>
        
    

        </div>
{/* 
        <Lottie 
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
          autoplay={defaultOptions.autoplay}
          rendererSettings={defaultOptions.rendererSettings}
          height={400}
          width={400}
        /> */}

        <div className="flex flex-col items-center my-20">
          <img src={techUseimg
          } alt="Tech Use" className="w-[60%] h-auto max-[800px]:w-[100%]" />
        </div>
      </div>
      
    </>
  );
}

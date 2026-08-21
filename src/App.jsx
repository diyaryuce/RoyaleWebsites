import {
  ListIndentDecreaseIcon,
  Package2Icon,
  SwordsIcon,
  BatteryChargingIcon,
  UsersIcon,
  GiftIcon,
  DollarSignIcon,
  ChevronDown
} from "lucide-react";
import Face from "/img/fjes.JPG"
import Logo from "/img/anadolu_white_notext_tight.png"

function App() {
  

  return (<>
    <div className="bg-[#0f0f0f] min-h-screen w-max min-w-full">
      <Navbar />
      <ChatBox />
    </div>
  </>);
}

export default App;

/* Components for App */

function Navbar() {
  return(<>
    <header 
      className="
        relative flex
        min-h-auto h-22
        bg-[#151515]
        bg-[linear-gradient(to_right,rgba(251,191,36,0.05)_3%,rgba(251,191,36,0.01)_10%,rgba(0,0,0,0.01)_100%)]

        after:absolute
        after:bottom-0
        after:left-0
        after:h-0.5
        after:w-full
        after:content-['']
        after:bg-[linear-gradient(to_right,rgba(251,191,36,0.85)_0%,rgba(251,191,36,0.55)_2%,rgba(55,55,55,0.55)_18%,rgba(35,35,35,0.4)_90%,rgba(0,0,0,0.04)_100%)]
      "
    >

      <div 
        className="
          flex items-center shrink-0
          gap-10 p-4 pr-7 w-80 
          border-0 border-r-[2.5px]
          border-[#21211f]
        "
      >
        <div className="flex items-center gap-3">
          <img src={Logo} className="h-12 w-12" />

          <h1 className="font-bold text-white text-2xl">Royale<span className="text-amber-300/85">.GG</span></h1>
        </div>

        <button 
          className="
            ml-auto group 
            border 
            p-1 w-8.5
            border-[#727272] bg-[#1b1b18] 
            flex justify-center

            cursor-pointer
            hover:bg-[#534f4b]
            transition duration-200
          "
        >

          <ListIndentDecreaseIcon size={20} className="text-[#727272] group-hover:text-[#a9a9a9] transition duration-200"/>
        </button>
      </div>

      <div 
        className="
          gap-10 p-4 pr-7
          flex flex-1 items-center
        "
      >
        
        <div className="flex items-center">
          <NavButton icon={Package2Icon}>Home</NavButton>
          <NavButton icon={SwordsIcon}>Battles</NavButton>
          <NavButton icon={BatteryChargingIcon}>Upgrader</NavButton>
          <NavButton icon={UsersIcon}>Affiliates</NavButton>
          <NavButton icon={GiftIcon}>Rewards</NavButton>
        </div>

        <div className="ml-auto">

          <div 
            className="
              flex items-center gap-6
            "
          >
            <div className="flex group items-center ml-4 pl-3 border-0 bg-[#212121]">
              <DollarSignIcon size={17} className="text-[#b3b3b3]"/>

              <input 
                type="number" 
                className="
                  text-[#b3b3b3]
                  bg-[#212121] 
                  pl-2 h-11 w-22
                  outline-0
                  appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none
                  [&::-webkit-outer-spin-button]:appearance-none
                "
              />
            </div>
          <div className="h-8.5 w-0.5 bg-[#212121] flex justify-center items-center" />

            <div className="flex justify-center items-center gap-5">

              <img
                src={Face}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
              
              <div className="">
                <p className="font-semibold text-white">OxHearts.com</p>
                <p className="text text-[#b3b3b3]">Challenger 3</p>
              </div>

              <ChevronDown size={18} className="ml-3 text-[#b3b3b3]"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>);
}

function ChatBox() {
  return(<>
    <div className="border-0 bg-[#151515] w-72 h-200">
      <Message 
        image={Face}
        name="bruhbruh"
        message="I always pull top items on terminal"
        clock="15:35"
      />
      <Message 
        image={Face}
        name="RoyaleR"
        message="Trust you will win"
        clock="15:36"
      />
      <Message 
        image={Face}
        name="Anonymous"
        message="Never gambled with any money"
        clock="15:37"
      />
      <Message 
        image={Face}
        name="Stephano"
        message="i put like £5 on every month"
        clock="15:38"
      />


      <Message 
        image={Face}
        name="0xHearts.com - Designer"
        message="Would rather play a human... Dont trust :)"
        clock="15:39"
      />
    </div>
  </>)
}

function NavButton({ icon: Icon, children }) {
  return (
    <button
      className="
        text-md text-[#b3b3b3]
        border
        group flex items-center
        p-5 h-11 gap-2
        border-hidden
        cursor-pointer
        transition duration-200
        hover:bg-[#212121]
      "
    >
      <Icon size={20} className="group-hover:text-amber-300 transition duration-200" />
      <span className="ml-1.5 group-hover:text-white transition duration-200">{children}</span>
    </button>
  );
}

function Message({ image, name, message, clock }) {
  return (<>
    <div 
      className="
        relative 
        flex
        p-3 pb-4.5

        after:absolute
        after:bottom-0
        after:left-0
        after:h-0.5
        after:w-full
        after:content-['']
        after:bg-[linear-gradient(to_right,rgba(251,191,36,0.15)_0%,rgba(35,35,35,0.4)_18%,rgba(0,0,0,0.00)_100%)]
      "
    >
      <img
        src={image}
        className="h-8 w-8 shrink-0 rounded-full object-cover"
      />

      <div className="ml-4">
        <h3 className="text-[#b3b3b3] text-[11px]">
          {name}
        </h3>

        <p className="text-[#b3b3b3] text-sm">
          {message}
        </p>

        <p className="absolute right-3 top-3 text-[11px] text-[#696969] font-semibold">
          {clock}
        </p>      
      </div>
    </div> 
  </>)
}

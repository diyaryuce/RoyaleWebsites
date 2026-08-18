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
              <button 
                className="
                  bg-amber-300/85
                  p-3 w-20 h-11
                  flex justify-center
                  text-sm font-semibold

                  transition duration-200
                  hover:cursor-pointer
                  hover:bg-amber-100/85
                "
              >
                Top up</button>
            </div>

          <div className="h-8.5 w-0.5 bg-[#212121] flex justify-center items-center" />

            <div className="flex justify-center items-center gap-5">

              <img
                src="/img/fjes.JPG"
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
    <div className="border-0 bg-[#151515] w-83 h-200">
      
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

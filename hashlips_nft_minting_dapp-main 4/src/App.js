import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  font-size:20px;
  background-color: var(--secondary);
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  padding: 20px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 200px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    }
    :hover{
        background-color:pink;
    }
  
`;


export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
 

 
`;

export const ResponsiveWrapper1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: stretched;
  align-items: stretched;

  width: 100%;
miin-width:300;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
}
 
`;
export const ResponsiveWrapper2 = styled.div`
display: flex;
flex: 2;
flex-direction: row;
justify-content: stretched;
align-items: stretched;
width:100%;

`;

export const ResponsiveWrapper3 = styled.div`
display: flex;
flex: 2;
flex-direction: row;
justify-content: stretched;
align-items: stretched;
width:100%;

`;
export const StyledLogo = styled.img`
  width: 500px;
 
  height: 250px;
  width: 60%;
 min-width: 500px;
  max-width: 700px;

`;
export const MediaLogo = styled.img`
marginTop:200px;
display: flex;
flex: 1;
  
`;
export const StyledImg = styled.img`

   height:700px;
    width: 500px;
   
  }
}
   
  }
  
`;

export const StyledImg1 = styled.img`


width: 1920px;
width: 100%;

    margin:0px:
  }
  
`;
export const StyledImg2 = styled.img`


width: 220px;
border-radius:60px;
minWidth:300;
    marginTop:300px:
  
  
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  


  return (
    
    <s.Screen>



<s.Container flex={1} jc={"center"} ai={"center"}
style={{ backgroundColor: "var(--primary)" }}
image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
><s.Container1  style={{  hover:{ opacity:.5,} }}  >

<div  ><il>
<a href="https://twitter.com/SadBoisNFTs"><img src='/config/images/twitter.png' onClick="https://arizonaatwork.com" /></a>
</il>  </div>
<div><il>
<a href="https://twitter.com/SadBoisNFTs"><img src='/config/images/opensea.png' onClick="https://arizonaatwork.com" /></a>
</il>  </div>
<div>     <il>
<a href="https://discord.gg/8dgtZEMr"><img src='/config/images/discord.png' onClick="https://arizonaatwork.com" /></a>
    </il>     </div>  
         



         </s.Container1>

         <StyledLogo style={{
              minWidth:500,
              marginTop:150,
            
            }} alt={"logo"} src={"/config/images/logo.png"} 
         
         />
          
          
          
         
    

      <s.Container
        flex={1}
        ai={"center"}
        
        
      >
       

        <ResponsiveWrapper flex={1} style={{ margin:0, }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
        
          </s.Container>
          
          <s.SpacerLarge />
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{
              minWidth:300,
              padding:10,
              paddingRight:30,
              paddingLeft:30,
              backgroundColor: "var(--accent)",
              paddingBottom: 10,
              borderRadius: 24,
            }}
          >
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </s.TextDescription>
            <s.SpacerSmall />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Excluding gas fees.
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </StyledButton>
                    </s.Container>
                  </>
                )}
              </>
            )}
            <s.SpacerMedium />
          </s.Container>
          <s.SpacerLarge />
          <s.Container flex={1} jc={"center"} ai={"center"}>
           
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerMedium />
      
      </s.Container>
      </s.Container>








          <ResponsiveWrapper1 style={{ marginTop:50, paddingLeft:250, paddingRight:250,}}test>
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ marginRight:50,  }}>
            <StyledImg  src={"/config/images/sadbois.png"} /> 
          </s.Container>
          <s.SpacerLarge />
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{
        
              
            }}
            
          >
            <s.TextTitle
              style={{
                minWidth:300,
                margin:50,
                textAlign: "center",
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>
            
            <s.TextTitle
                  style={{ textAlign: "Left", color: "var(--accent-text)",fontSize: 22, minWidth:450,
                }}
                >
                   Missed out on a Blue Chip <br></br>
I got rugged for the 5th time.<br></br>
No wifi. NGMI.<br></br>
Forgot seed phrase.<br></br>
I thought phishing was with a pole.<br></br>
Mom kicked me out of basement<br></br>
When the airdrops a honey pot.<br></br>
No one retweeted my pin tweet.<br></br>
I said GM and everyone said GN.<br></br>
My ex hacked my Metamask.<br></br>
I ran out of weed.<br></br>
My wife’s boyfriend has 5 Bored Apes.<br></br>
No one goes outside anymore.<br></br>
I fat fingered my listing.<br></br>
Bought Cute.<br></br>
Not knowing that you are sad boi.<br></br>
Cannot get verified in Discord.<br></br>
No Pre-Sale list.<br></br>
If you bought a rug, pitched a rug 
                </s.TextTitle>
             </s.Container>
            
                
                    
                
                    
           
        
        </ResponsiveWrapper1>

                    

        
         
         <s.Container flex={1} jc={"center"} ai={"center"} style={{ marginTop:150, }}>
          <StyledImg1  src={"/config/images/sad.png"} /> 
          </s.Container>
         
                 
          
       
                
                    
           
        
          <ResponsiveWrapper3 style={{ marginTop:200,marginBottom:200,minWidth:100, paddingRight:200,paddingLeft:200, }}test>
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:20, }}>
           
            <s.TextTitle
              style={{
              
                margin:50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>

            <s.TextTitle
                  style={{ textAlign: "Left", color: "var(--accent-text)",fontSize: 22,
                }}
                >
                   Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries,
                     but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                </s.TextTitle>

          </s.Container>
          
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:20,  }}>
          
            <s.TextTitle
              style={{
                
                margin:50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>
            <s.TextTitle
                  style={{ textAlign: "Left", color: "var(--accent-text)",fontSize: 22, 
                }}
                >
                   Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries,
                     but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                </s.TextTitle>
          </s.Container>
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:20, }}>
           
            <s.TextTitle
              style={{
                
                margin:50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>
            <s.TextTitle
                  style={{ textAlign: "Left", color: "var(--accent-text)",fontSize: 22, 
                }}
                >
                   Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries,
                     but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                </s.TextTitle>
          </s.Container>
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:20, }}>
            
            <s.TextTitle
              style={{
                
                margin:50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>
            <s.TextTitle
                  style={{ textAlign: "Left", color: "var(--accent-text)",fontSize: 22, 
                }}
                >
                   Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,
                    when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries,
                     but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                </s.TextTitle>
          </s.Container>
      </ResponsiveWrapper3>
       
                
                    
           
        
          <ResponsiveWrapper2 style={{ marginTop:100,marginBottom:200,minWidth:100, paddingRight:200,paddingLeft:200, }}test>
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:10, }}>
            <StyledImg2  src={"/config/images/sadbois.gif"} /> 
            <s.TextTitle
              style={{
              
                margin:50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>
          </s.Container>
          
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:10,  }}>
            <StyledImg2  src={"/config/images/sadbois.gif"} /> 
            <s.TextTitle
              style={{
                
                margin:50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>
          </s.Container>
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:10, }}>
            <StyledImg2  src={"/config/images/sadbois.gif"} /> 
            <s.TextTitle
              style={{
                
                margin:50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>
          </s.Container>
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ padding:10, }}>
            <StyledImg2  src={"/config/images/sadbois.gif"} /> 
            <s.TextTitle
              style={{
                
                margin:50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              Why Sad ?
            </s.TextTitle>
          </s.Container>
      </ResponsiveWrapper2>
    </s.Screen>
  );
}

export default App;

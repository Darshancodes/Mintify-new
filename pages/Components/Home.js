import Image from 'next/image';
import React from "react";
import Link from 'next/link'
import { Button, Icon } from "@chakra-ui/react"


const Home = () => {
  return (
    <div className="flex justify-between items-center mt-10 md:mt-0">

      {/* Slogan */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:justify-start md:items-start space-y-4">
        <h1 className="text-[43px] md:text-[75px] font-bold">
          Create<span className="text-[#F97316]">.</span>Mint
          <span className="text-[#F97316]">.</span>Sell
        </h1>
        <p className="text-[10px] md:text-[15px] text-center md:text-start px-1.5 text-[#D1D5DB] tracking-widest">
          Create. Buy. Sell and even play with your own pixelated NFTs. This is
          one true stop for all the pixel art lovers & makers.{" "}
        </p>
        <div className="w-full flex justify-between items-center md:justify-start space-x-4 pt-5">

        <Link href="/create" passHref>
              <Button
                as="a"
                variant="solid"
                left={1.5}
                backgroundColor="#F97316"
                border="1px solid #F97316"
                _hover={{
                  backgroundColor: '#000',
                  border: '1px solid #bbffff',
                  color: 'white',
                }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: 'full', sm: 'auto' }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                cursor="pointer"
              >
                Create
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
            </Link>
            <Link href="/marketplace" passHref>
              <Button
                as="a"
                backgroundColor="#F97316"
                border="1px solid #F97316"
                _hover={{
                  backgroundColor: '#000',
                  border: '1px solid #fff',
                  color: 'white',
                }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: 'full', sm: 'auto' }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                cursor="pointer"
              >
                Explore 
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
            </Link>

        </div>
      </div>
      {/* Hero Image */}
      <div className="hidden md:block">
        <Image
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1671967532/Mintify/Frame_1_bin2yp.svg"
          width={650}
          height={650}
        />
      </div>
    </div>
  );
};

export default Home;
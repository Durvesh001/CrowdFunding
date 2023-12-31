import React from 'react';
import { useStateContext } from '../context';
import { useState, useEffect } from 'react'
import { DisplayCampaigns } from '../components';

export default function Withdraw() {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
  
    const { address, contract, getUserCampaigns } = useStateContext();
  
    const fetchCampaigns = async () => {
      setIsLoading(true);
      const data = await getUserCampaigns();
      setCampaigns(data);
      setIsLoading(false);
    }
  
    useEffect(() => {
      if(contract) fetchCampaigns();
    }, [address, contract]);
  
    return (
      <DisplayCampaigns 
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    )
  }
  


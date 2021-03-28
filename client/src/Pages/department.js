const department = (s1) =>{

if(s1.value == "AIT"){
    return  ["|","AE|Aeronutical Engineering","AU|Automobile Engineering","BT|BioTechnology Engineering","CSE|Aeronutical Engineering","CV|Computer Science Engineering","CTM|Construction Technology & Management ","EEE|Electrical & Electronic Engineering","ECE|Electronics & Communication Engineering","ISE|Information Science & Engineering","ME|Mechanical Engineering","MSE|Manufacturing Science","MT|Mechatronics Engineering","MN|Mining Engineering","MBA|Master of Buisness Administration","MCA|Master of Computer Applications","MCFI|M.Tech in Cyber Forensics and Information Security","MCNE|M.Tech in Computer Network Engineering","MCSE|M.Tech in Computer Science and Engineering","MPSE|M.Tech in Power Systems and Engineering","MDCE|M.Tech in Digital Communication and Engineering","MBT|M.Tech in Bio Technology","MMD|M.Tech in Machine Design","OTH|Others"];
  } else if(s1.value == "ANRVASA"){
    return  ["|","Arch|Bachelor Of Architecture","OTH|Others"];
  } else if(s1.value == "ABMRCP"){
    return  ["|","DP|D.Pharm","BP|B.Pharm","MP|M.Pharm","PD|Pharm D","OTH|Others"];
  }
  else if(s1.value == "ASM"){
    return  ["|","PGDM|P.G.D.M","OTH|Others"];
  }
  else if(s1.value == "ASE"){
    return  ["|","DEE|Diploma in Elementary Education","BE|Bachelor of Education","OTH|Others"];
  }
  else if(s1.value == "AIGS"){
    return  ["|","BAJ|Bachelor of Arts in Journalism","BSC|Bachelor of science","BA|Bachelor of Arts","BSW|Bachelor of Social work","BBAI|Bachelor of Business Administration International Immersion","BC|Bachelor of Commerce","BCA|Bachelor of Computer Application","BBA|Bachelor of Business Application","BSCF|Bsc in Fashion and Apparel Design","ME|Master of Arts in Economics","MAE|Master of Arts in English","MSE|Master of Science in Electronic Media","MAJ|Master of Arts in Journalism and Mass Communication","MSW|Master of Social Work","MIB|Master of International Business","MFA|Master in Finance and Accounting","MC|Master of Commerce","MSP|Master of Science in Physics","MSC|Master of Science in Chemistry","MSM|Master of Science in Mathematics","MSPy|Master of Science in Psychology","MsF|Master of Science in Fashion and Apparel Design","OTH|Others"];
  }
    else if(s1.value == "AP"){
    return  ["|","AE|Aeronautical Engineering","ADFT|Apparel Design & Fabrication Technology","ArchE|Architecture Engineering","AuE|Automobile Engineering","CE|Civil Engineering","CP|Commercial Practise","CSE|Computer Science and Engineering","EEE|Electrical & Electronics Engineering","ECE|Electrical & Communication Engineering","ME|Mechanical Engineering","MtE|Mechatronics Engineering","MiE|Mining Engineering","OTH|Others"];
  }
  else if(s1.value == "SNSN"){
    return  ["|","GNM|General Nursing and MidWife","BBN|Basic BSc Nursingy","PBBN|Post Basic BSc Nursing","MN|Msc Nursing","OTH|Others"];
  }
  else if(s1.value == "SNCN"){
     return  ["|","BBN|Basic BSc Nursingy","PBBN|Post Basic BSc Nursing","MN|Msc Nursing","OTH|Others"];
}
  else if(s1.value == "APC"){
    return  ["|","PCMB|Science-Physics Chemistry Mathematics and Biology","PCMC|Science-Physics Chemistry Mathematics and Computer Science","PCME|Science-Physics Chemistry Mathematics and Electronics","COM|Commerce-Computer Science Economics Business Studies and Accountancy","OTH|Others"];
  }
  else if(s1.value == "ASL"){
    return  ["|","BA LLB|BA LLB","LLB|LLB","BBA LLB|BBA LLB","OTH|Others"];
  }
  else if(s1.value == "ASD"){
    return  ["|","PA|Painting","GD|Graphics Design","AMD|Animation and Multimedia Design","ISD|Interior and Spatial Design","PD|Product Designy","OTH|Others"];
  }
  else if(s1.value == "AIAS"){
      return  ["|","BAT|B.Sc in Anesthesia Technology","BOTT|B.Sc Operation Theater Technology","BRCT|B.Sc in Renal Dialysis Technology","BRT|BSc in Radio Therapy","BO|BSc in Optometry","OTH|Others" ];
    }
    else if(s1.value == "AIP"){
      return  ["|","BOP|Bachelor of Physiotheraphy","OTH|Others"];
    }


}
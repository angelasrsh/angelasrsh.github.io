---
title: Capacitors Can Make Music?
published: 2026-06-02
description: What are singing capacitors and how do you get rid of it
tags: [Career]
category: Career
licenseName: "Unlicensed"
author: angelasrsh
sourceLink: "https://github.com/angelasrsh/capacitor-music"
draft: False
---
# Capacitors Can Make Music?

Reference: [“Singing” Multilayer Ceramic Capacitors and Mitigation Methods—A Review](https://www.mdpi.com/1424-8220/22/10/3869)

Did you know that a rigid PCB could possibly make music through vibrations? If it has MLCCs, there's a possibility of them vibrating enough to make an audible sound with a AC or AC + DC input. Sometimes this doesn't matter, and sometimes they do, and in this post I'll be talking about what I've learned about these and how you can fix this if you encounter them in your designs.

In the article by Corina Covaci and Aurel Gontean ''Singing' Multilayer Ceramic Capacitors and Mitigation Methods--A Review", the phenomenon of MLCC vibrations is found to be induced by piezoelectric and electrostatic effects, and can be mitigated through choosing different capacitor or PCB layout solutions. I learned about this through a colleague's project that would not function properly if there were external noise, so this was an interesting problem.

This problem can occur in PCBs with acoustic applications, receiving and transmitting AC signals between 20Hz - 20kHz and using MLCCs. If the signal is purely AC, then by the equations of mechanical strain equate to having only piezoelectricity with frequency components. If not then it would be also be dependent on electrostriction which is created from the DC terms.

These MLCCs are created with multiple layers, which directly relate to how much the vibration level. Its important to know how to measure this if you find it occurring, firstly is to measure acoustic noise or the vibration. Acoustic noise is measured through a a microphone, FFT analyzer. Another cool method is to scan the PCB using a laser doppler vibrometer. These uses the doppler effect of the light to measure the vibration of a surface with no contact. 

LDV is interesting, once you shine a light to the moving surface the frequency o the reflected light changes from the transmitted version. The change in frequency is directly proportional to the velocity of the vibration. This is highly accurate if you are using a accurate photodetector and optical system.

The solution to this problem is to buy a more expensive MLCC. These MLCCs have different materials that have low dielectric constants to attenuate vibrations, or they are held by metal terminals above the PCB.

There are also better options to fix this problem in my opinion, this involves placing your capacitors in such a way that multiple of them cancel out the vibrations on the PCB. Examples include placing them across from from each layer on the top and bottom layers. Placing them in parallel on the same side but with opposite phase inputs. Or adding some sort of substrate under those capacitors with a lower dielectric constant.

In my experience, the vibrations can also be impactful when its not audible. At Cisco, there was a problem with heat flow not working because of vibrations shifting the air to other parts of the board. At ST, someone heard the singing capacitors when testing a board. Specifically the layout of that board probably had parallel capacitors in phase with each other on the same side of the PCB. Overall, vibrations of the PCB can be harmful and not intentional and should be considered when there is small scale misbehavior.





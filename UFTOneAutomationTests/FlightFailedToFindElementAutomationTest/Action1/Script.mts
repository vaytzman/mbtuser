﻿systemUtil.CloseProcessByName ("FlightsGUI.exe")
systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name") @@ hightlight id_;_2059373704_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password") @@ hightlight id_;_2136349448_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1981704688_;_script infofile_;_ZIP::ssf5.xml_;_
If WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS_2").Exist(5) Then
Reporter.ReportEvent micPass, "Passed Test", "Login work properly"
else
Reporter.ReportEvent micFail "Failed Test", "Failed to Login"
End If @@ hightlight id_;_2075215336_;_script infofile_;_ZIP::ssf6.xml_;_

function createActiveXObject(C){var A;var B=null;try{if(window.ActiveXObject){B=new ActiveXObject(C)}else{if(window.GeckoActiveXObject){B=new GeckoActiveXObject(C)}}}catch(A){}return B}function detectWMP(){var C={installed:false,type:null};var D="MediaPlayer.MediaPlayer.1";var A="WMPlayer.OCX.7";if((window.ActiveXObject&&navigator.userAgent.indexOf("Windows")!=-1)){C.type="IE";var B=createActiveXObject(A);if(B){C.installed=true;return C}else{B=createActiveXObject(D);if(B){C.installed=true;return C}else{C.versionInfo="none";return C}}}else{if(navigator.mimeTypes){C.type="NS";var B=navigator.mimeTypes["application/x-mplayer2"].enabledPlugin;if(B){C.installed=true;return C}return C}}}function creatbgmusic(E,H,B,A,K,C,J){var I="<OBJECT id=phx width=100% classid=clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6 "+(B?"height=45":"")+'><PARAM NAME="URL" VALUE="'+E+"?t="+Math.random()+'"> <PARAM NAME="rate" VALUE="1"> <PARAM NAME="balance" VALUE="0"> <PARAM NAME="currentPosition" VALUE="0"> <PARAM NAME="defaultFrame" VALUE=""> <PARAM NAME="PlayCount" VALUE="'+(A?100:0)+'"> <PARAM NAME="DisplayMode" VALUE="0"> <PARAM NAME="PreviewMode" VALUE="0"> <PARAM NAME="DisplayForeColor" VALUE="16777215"> <PARAM NAME="ShowCaptioning" VALUE="0"> <PARAM NAME="ShowControls" VALUE="1"> <PARAM NAME="ShowAudioControls" VALUE="1"> <PARAM NAME="ShowDisplay" VALUE="0"> <PARAM NAME="ShowGotoBar" VALUE="0"> <PARAM NAME="ShowStatusBar" VALUE="0"> <PARAM NAME="ShowTracker" VALUE="1"> <PARAM NAME="autoStart" VALUE="'+(K?1:0)+'"> <PARAM NAME="AutoRewind" VALUE="'+(K?1:0)+'"> <PARAM NAME="currentMarker" VALUE="0"> <PARAM NAME="invokeURLs" VALUE="0"> <PARAM NAME="baseURL" VALUE=""> <PARAM NAME="volume" VALUE="100"> <PARAM NAME="mute" VALUE="0"> <PARAM NAME="stretchToFit" VALUE="0"> <PARAM NAME="windowlessVideo" VALUE="1"> <PARAM NAME="enabled" VALUE="1"> <PARAM NAME="EnableFullScreenControls" VALUE="0"> <PARAM NAME="EnableTracker" VALUE="1"> <PARAM NAME="EnablePositionControls" VALUE="1"> <PARAM NAME="enableContextMenu" VALUE="0"> <PARAM NAME="SelectionStart"  VALUE="0"> <PARAM NAME="SelectionEnd" VALUE="0"> <PARAM NAME="fullScreen" VALUE="0"> <PARAM NAME="SAMIStyle" VALUE=""> <PARAM NAME="SAMILang" VALUE=""> <PARAM NAME="SAMIFilename" VALUE=""> <PARAM NAME="captioningID" VALUE=""> <PARAM NAME="Visualizations" VALUE="1">';if(H<=1){I+=' <PARAM NAME="uiMode" VALUE="mini">'}I+="</OBJECT>";var G='<EMBED src="'+E+"?t="+Math.random()+'" width="100%" '+(B?"height=45":"")+' type="application/x-mplayer2" invokeurls="0" autogotourl="false" autostart='+(K?1:0)+" loop="+(A?1:0)+' quality="high"';if(H<=1){G+='showcontrols="1" showpositioncontrols="0" '}G+="> </EMBED>";var F='<div id="m_bgmusic" class="modbox">�Բ�������δ��װwindows media player���޷����͸ÿռ�ı������֣�����<a href="http://www.baidu.com/s?wd=windows+media+player+%CF%C2%D4%D8&cl=3" target="_blank">���ز���װ</a><br><br></div>';var D=detectWMP();if(J=="FckMusicHelper"){if(D.installed){if(D.type=="IE"){return I}else{if(D.type=="NS"){return G}}}else{return F}}else{if(D.installed){if(D.type=="IE"){document.write(I)}else{if(D.type=="NS"){document.write(G)}}}else{document.write(F)}return""}};
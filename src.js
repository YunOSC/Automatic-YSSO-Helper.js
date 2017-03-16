javascript:(function(){ 
for (i = 2 ;i < 30; i++) { 
 radio = document.getElementById('ctl00_ContentPlaceHolder1_Survey_GridView_ctl0'+i+'_RB_Satisfaction_0');
 radio.checked = true;
 };

for (i = 2 ;i < 30; i++) { 
radio = document.getElementById('ctl00_ContentPlaceHolder1_CourCore_GridView_ctl0'+i+'_Relation_0');
radio.checked = true;
};

for (i = 10 ;i < 30; i++) { 
radio = document.getElementById('ctl00_ContentPlaceHolder1_Survey_GridView_ctl'+i+'_RB_Satisfaction_0');
radio.checked = true;
};

btn = document.getElementById('ctl00_ContentPlaceHolder1_Submit');
btn.click();
})();

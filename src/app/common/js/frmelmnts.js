'use strict';
angular.module('playerApp.frmelmnts', [])
  .constant('frmelmnts', {"en":{"btn":{"add":"ADD","yes":"YES","no":"NO","ok":"OK","cancel":"CANCEL","save":"SAVE","resume":"RESUME","update":"UPDATE","clear":"CLEAR","publish":"PUBLISH","reject":"REJECT","tryagain":"TRY AGAIN","close":"CLOSE","accept":"ACCEPT","discard":"DISCARD","startcreating":"START CREATING","tcyes":"Yes","tcno":"No","edit":"EDIT","submit":"SUBMIT","download":"DOWNLOAD","apply":"APPLY","reset":"RESET","smplcsv":"DOWNLOAD SAMPLE CSV","uploadorgscsv":"UPLOAD ORGANIZATIONS CSV","uploadusrscsv":"UPLOAD USERS CSV","chksts":"CHECK STATUS","approve":"APPROVE","tcok":"Ok","viewless":"VIEW LESS","viewmore":"VIEW MORE","finish":"FINISH"},"bdge":{"course":"Course"},"lbl":{"tcyes":"Yes","tcno":"No","tcfrom":"From","tcto":"To","title":"Title","description":"Description","takenote":"TAKE NOTE","addnote":"ADD NOTE","mynotebook":"My Notebook","mynotes":"My Notes","search":"Search","edit":"Edit","delete":"Delete","deletenote":"Delete Note","yes":"YES","no":"NO","insertimage":"Insert Image","textbook":"Book","textbookdescription":"Build books using study material for an interesting learning experience.","course":"Course","coursedescription":"Design courses using books, collections and study material. Courses are for a duration, to achieve an objective.","lesson":"Study Material","lessondescription":"Create different study materials like story, game, activity, audio, video, using the inbuilt authoring tools.","collection":"Collection","collectiondescription":"Compile study material of your choice.","lessonplandescription":"Frame lesson plans with structured sections for an efficient learning experience.","lessonplan":"Lesson Plan","contentupload":"Upload Content","contentuploaddescription":"You can upload content here.","createlessontext":"Create Study Material","name":"Name","lessonfillater":"These details can be filled when adding content to study material.","createcollection":"Create Collection","collectionfillater":"These details can be filled when adding content to collection.","createtextbook":"Create Book","bookfillater":"These details can be filled when adding content to book.","createlessonplan":"Create Lesson Plan","lpfilllater":"These details can be filled when adding content to lesson plan.","designcourse":"Design Course","coursefilllater":"These details can be filled when adding content to create course.","author":"Author","medium":"Medium","class":"Class","subject":"Subject","lastupdate":"Last update","createdon":"Created on","status":"Status","flaggedreason":"Flagged reason","flaggedby":"Flagged by","flaggeddescription":"Flagged Description","contentinformation":"Content Information","concept":"Concepts","curriculum":"Curriculum","agreeandproceedtext":"All content created and uploaded here will be licensed under CC-BY 4.0.","deletecontent":"Delete Content","deleteconfirm":"Are you sure to delete this content?","deletepublishedcontent":"Retire Content","deletepublishedconfirm":"Retire myself from the content(s) ?","viewworkspace":"View your workspace","resourcetype":"Resource Type","experience":"Experience","worktitle":"Occupation / Work Title","designation":"Designation","organization":"Organization","subjectstaught":"Subject(s) taught","iscurrentjob":"Is this your current job","address":"Address","seladdresstype":"Select Address Type","permanent":"Permanent","current":"Current","addressline1":"Address Line 1","addressline2":"Address Line 2","city":"City","state":"State","country":"Country","pincode":"Pin Code","education":"Education","degree":"Degree","yop":"Year of Passing","institute":"Institution Name","grade":"Grade","percentage":"Percentage","board":"Board/University","addlInfo":"Additional Information","email":"Email ID","phone":"Phone number","gender":"Gender","language":"Language(s) known","birthdate":"Birthdate (dd/mm/yyyy)","subjects":"Subjects of expertise","contents":"Contents","currentlocation":"Current location","grades":"Grades","socialmedia":"Social media","facebook":"Facebook","twitter":"Twitter","linkedIn":"LinkedIn","blog":"Blog","whatwentwrong":"What went wrong?","whatwentwrongdesc":"Let us know what went wrong, please mention the exact reasons so that we review this as soon as possible and address this issue super fast. Thanks for your feedback!","contentname":"CONTENT NAME","selectreason":"SELECT A REASON","share":"Share","sharelink":"Share by the link - ","batchname":"NAME OF BATCH","aboutbatch":"ABOUT THIS BATCH","startdate":"START DATE","enddate":"END DATE","natureofbatch":"NATURE OF BATCH","bacthmembers":"MEMBERS IN THE BATCH","batchmentors":"MENTORS IN THE BATCH","batchparticipants":"SELECTED PARTICIPANTS","batchselmentors":"SELECTED MENTORS","inactive":"Inactive","active":"Active","blocked":"Blocked","retired":"Retired","filters":"Filters","filterby":"Filter by","sort":"Sort","chkuploadsts":"Check Upload Status","upldfile":"Uploaded File","processid":"Process ID","provider":"Provider","extlid":"External Id","orgid":"OrgId","successres":"Success Results","failres":"Failure Results","confmblk":"Are you sure to Block  ","selrole":"Select Role","org":"Org","assgnbdge":"Assign Badge","cnfmassgn":"Do you want to assign","orgtypes":"Org Types","addorgtype":"Add Org Type","updateorgtype":"Update Org Type","confirmblock":"Are you sure to Block","confirmassign":"Do you want to assign ","jobProfile":"experience","avatar":"profile picture","profileSummary":"profile description","firstName":"first name","lastName":"last name","skillTags":"Skill Tags","addSkills":"Add Skills"},"scttl":{"todo":"To Do","myworkspace":"My Workspace","contributions":"Contributions","badges":"Badges","instructions":"Instructions :","blkuser":"Block User"},"tab":{"home":"Home","courses":"Courses","resources":"Library","community":"Community","profile":"Profile"},"drpdn":{"male":"Male","female":"Female","transgender":"Transgender"},"prmpt":{"enterphoneno":"Enter 10 digit phone number with country code","search":"Search courses, library","curriculum":"Curriculum","medium":"Medium","subject":"Subjects","grades":"Grades","contenttypes":"Content Types","concepts":"Concepts","orgtype":"Org Type","deletenote":"Are you sure to delete this note?","userlocation":"Location","roles":"Roles"},"intxt":{"t0001":"Search for notes or title","t0002":"ADD YOUR COMMENT"},"alt":{"sortby":"Sort ascending or descending order","filter":"Filter"},"instn":{"t0001":"Only upto 200 users can be uploaded with each csv file ","t0002":"Only upto 200 organizations can be uploaded with each csv file ","t0003":"'firstName', 'email', 'userName', 'password' fields are mandatory.","t0004":"If 'provider' is given, 'emailVerified' and 'phoneVerified' should be set to true. Else, they should be set to false.","t0005":"'roles', 'grade', 'language' and 'subject' can take multiple values. Sample format of list fields:  ENGLISH,HINDI .","t0006":"Date of birth ('dob') field format is YYYY-MM-DD, e.g.: 1992-10-12.","t0007":"Organization name ('orgName') is mandatory","t0008":"If the organization is a tenant (like state), then it should be marked as a root org. I.e. 'isRootOrg' should be set as true, else it should be false.","t0009":"'channel' value is required if 'isRootOrg' is true.","t0010":"'contactDetail' should be in json format . eg:[{'address':'address','phone':'xxxxxxxx','fax':'xxxxx'}].","t0011":"You can track progress with process ID","t0012":"Please save the Process ID for your reference .You can track progress with process ID","t0013":"Download the sample csv for reference.","t0014":"CSV Columns:","t0015":"Upload Organizations","t0016":"Upload Users","t0017":"'externalId' and 'provider' are mutually necessary, i.e. either both the values should be provided or not provided together.","t0018":"Flag course as inappropriate","t0019":"Flag content as inappropriate","t0020":"Start typing to add a skill"},"snav":{"start":"Create","draft":"Draft","inreview":"Review Submissions","published":"Published","alluploads":"All Uploads","upForReview":"Up For Review","flagged":"Flagged"},"pgttl":{"takeanote":"Take a note"},"lnk":{"viewall":"View All","profile":"Profile","workSpace":"Workspace","logout":"Logout","dashboard":"Admin dashboard","myactivity":"My Activity","coursebacthes":"Course Batches","imglnkmsg":"http://example.com/images/diagram.jpg optional title "}},"ta":{"btn":{"add":"ADD","yes":"YES","no":"NO","ok":"OK","cancel":"CANCEL","save":"SAVE","resume":"RESUME","update":"UPDATE","clear":"CLEAR","publish":"PUBLISH","reject":"REJECT","tryagain":"TRY AGAIN","close":"CLOSE","accept":"ACCEPT","discard":"DISCARD","startcreating":"START CREATING","tcyes":"Yes","tcno":"No","edit":"EDIT","submit":"SUBMIT","download":"DOWNLOAD","apply":"APPLY","reset":"RESET","smplcsv":"DOWNLOAD SAMPLE CSV","uploadorgscsv":"UPLOAD ORGANIZATIONS CSV","uploadusrscsv":"UPLOAD USERS CSV","chksts":"CHECK STATUS","approve":"APPROVE","tcok":"Ok","viewless":"VIEW LESS","viewmore":"VIEW MORE","finish":"FINISH"},"bdge":{"course":"Course"},"lbl":{"tcyes":"Yes","tcno":"No","tcfrom":"From","tcto":"To","title":"Title","description":"Description","takenote":"TAKE NOTE","addnote":"ADD NOTE","mynotebook":"My Notebook","mynotes":"My Notes","search":"Search","edit":"Edit","delete":"Delete","deletenote":"Delete Note","yes":"YES","no":"NO","insertimage":"Insert Image","textbook":"Book","textbookdescription":"Build books using study material for an interesting learning experience.","course":"Course","coursedescription":"Design courses using books, collections and study material. Courses are for a duration, to achieve an objective.","lesson":"Study Material","lessondescription":"Create different study materials like story, game, activity, audio, video, using the inbuilt authoring tools.","collection":"Collection","collectiondescription":"Compile study material of your choice.","lessonplandescription":"Frame lesson plans with structured sections for an efficient learning experience.","lessonplan":"Lesson Plan","contentupload":"Upload Content","contentuploaddescription":"You can upload content here.","createlessontext":"Create Study Material","name":"Name","lessonfillater":"These details can be filled when adding content to study material.","createcollection":"Create Collection","collectionfillater":"These details can be filled when adding content to collection.","createtextbook":"Create Book","bookfillater":"These details can be filled when adding content to book.","createlessonplan":"Create Lesson Plan","lpfilllater":"These details can be filled when adding content to lesson plan.","designcourse":"Design Course","coursefilllater":"These details can be filled when adding content to create course.","author":"Author","medium":"Medium","class":"Class","subject":"Subject","lastupdate":"Last update","createdon":"Created on","status":"Status","flaggedreason":"Flagged reason","flaggedby":"Flagged by","flaggeddescription":"Flagged Description","contentinformation":"Content Information","concept":"Concepts","curriculum":"Curriculum","agreeandproceedtext":"All content created and uploaded here will be licensed under CC-BY 4.0.","deletecontent":"Delete Content","deleteconfirm":"Are you sure to delete this content?","viewworkspace":"View your workspace","resourcetype":"Resource Type","experience":"Experience","worktitle":"Occupation / Work Title","designation":"Designation","organization":"Organization","subjectstaught":"Subject(s) taught","iscurrentjob":"Is this your current job","address":"Address","seladdresstype":"Select Address Type","permanent":"Permanent","current":"Current","addressline1":"Address Line 1","addressline2":"Address Line 2","city":"City","state":"State","country":"Country","pincode":"Pin code","education":"Education","degree":"Degree","yop":"Year of passing","institute":"Institution Name","grade":"Grade","percentage":"Percentage","board":"Board/University","addlInfo":"Additional Information","email":"Email ID","phone":"Phone number","gender":"Gender","language":"Language(s) known","birthdate":"Birthdate (dd/mm/yyyy)","subjects":"Subjects of expertise","contents":"Contents","currentlocation":"Current location","grades":"Grades","socialmedia":"Social media","facebook":"Facebook","twitter":"Twitter","linkedIn":"LinkedIn","blog":"Blog","whatwentwrong":"What went wrong?","whatwentwrongdesc":"Let us know what went wrong, please mention the exact reasons so that we review this as soon as possible and address this issue super fast. Thanks for your feedback!","contentname":"CONTENT NAME","selectreason":"SELECT A REASON","share":"Share","sharelink":"Share by the link - ","batchname":"NAME OF BATCH","aboutbatch":"ABOUT THIS BATCH","startdate":"START DATE","enddate":"END DATE","natureofbatch":"NATURE OF BATCH","bacthmembers":"MEMBERS IN THE BATCH","batchmentors":"MENTORS IN THE BATCH","batchparticipants":"SELECTED PARTICIPANTS","batchselmentors":"SELECTED MENTORS","inactive":"Inactive","active":"Active","blocked":"Blocked","retired":"Retired","filters":"Filters","filterby":"Filter by","sort":"Sort","chkuploadsts":"Check Upload Status","upldfile":"Uploaded File","processid":"Process ID","provider":"Provider","extlid":"External Id","orgid":"OrgId","successres":"Success Results","failres":"Failure Results","confmblk":"Are you sure to Block  ","selrole":"Select Role","org":"Org","assgnbdge":"Assign Badge","cnfmassgn":"Do you want to assign","orgtypes":"Org Types","addorgtype":"Add Org Type","updateorgtype":"Update Org Type","confirmblock":"Are you sure to Block","confirmassign":"Do you want to assign ","jobProfile":"experience","avatar":"profile picture","profileSummary":"profile description","firstName":"first name","lastName":"last name","skillTags":"Skill Tags","addSkills":"Add Skills"},"scttl":{"todo":"To Do","myworkspace":"My Workspace","contributions":"Contributions","badges":"Badges","instructions":"Instructions :","blkuser":"Block User"},"tab":{"home":"முகப்பு","courses":"படிப்புகள்","resources":"நூலகம்","community":"சமூக","profile":"விவரம்"},"drpdn":{"male":"Male","female":"Female","transgender":"Transgender"},"prmpt":{"enterphoneno":"Enter 10 digit phone number with country code","search":"Search courses, library","curriculum":"Curriculum","medium":"Medium","subject":"Subjects","grades":"Grades","contenttypes":"Content Types","concepts":"Concepts","orgtype":"Org Type","deletenote":"Are you sure to delete this note?","userlocation":"Location","roles":"Roles"},"intxt":{"t0001":"Search for notes or title","t0002":"ADD YOUR COMMENT"},"alt":{"sortby":"Sort ascending or descending order","filter":"Filter"},"instn":{"t0001":"Only upto 200 users can be uploaded with each csv file ","t0002":"Only upto 200 organizations can be uploaded with each csv file ","t0003":"'firstName', 'email', 'userName', 'password' fields are mandatory.","t0004":"If 'provider' is given, 'emailVerified' and 'phoneVerified' should be set to true. Else, they should be set to false.","t0005":"'roles', 'grade', 'language' and 'subject' can take multiple values. Sample format of list fields:  ENGLISH,HINDI .","t0006":"Date of birth ('dob') field format is YYYY-MM-DD, e.g.: 1992-10-12.","t0007":"Organization name ('orgName') is mandatory","t0008":"If the organization is a tenant (like state), then it should be marked as a root org. I.e. 'isRootOrg' should be set as true, else it should be false.","t0009":"'channel' value is required if 'isRootOrg' is true.","t0010":"'contactDetail' should be in json format . eg:[{'address':'address','phone':'xxxxxxxx','fax':'xxxxx'}].","t0011":"You can track progress with process ID","t0012":"Please save the Process ID for your reference .You can track progress with process ID","t0013":"Download the sample csv for reference.","t0014":"CSV Columns:","t0015":"Upload Organizations","t0016":"Upload Users","t0017":"'externalId' and 'provider' are mutually necessary, i.e. either both the values should be provided or not provided together.","t0018":"Flag course as inappropriate","t0019":"Flag content as inappropriate","t0020":"Start typing to add a skill"},"snav":{"start":"Create","draft":"Draft","inreview":"Review Submissions","published":"Published","alluploads":"All Uploads","upForReview":"Up For Review","flagged":"Flagged"},"pgttl":{"takeanote":"Take a note"},"lnk":{"viewall":"View All","profile":"Profile","workSpace":"Workspace","logout":"Logout","dashboard":"Admin dashboard","myactivity":"My Activity","coursebacthes":"Course Batches","imglnkmsg":"http://example.com/images/diagram.jpg optional title "}},"te":{"btn":{"add":"ADD","yes":"YES","no":"NO","ok":"OK","cancel":"CANCEL","save":"SAVE","resume":"RESUME","update":"UPDATE","clear":"CLEAR","publish":"PUBLISH","reject":"REJECT","tryagain":"TRY AGAIN","close":"CLOSE","accept":"ACCEPT","discard":"DISCARD","startcreating":"START CREATING","tcyes":"Yes","tcno":"No","edit":"EDIT","submit":"SUBMIT","download":"DOWNLOAD","apply":"APPLY","reset":"RESET","smplcsv":"DOWNLOAD SAMPLE CSV","uploadorgscsv":"UPLOAD ORGANIZATIONS CSV","uploadusrscsv":"UPLOAD USERS CSV","chksts":"CHECK STATUS","approve":"APPROVE","tcok":"Ok","viewless":"VIEW LESS","viewmore":"VIEW MORE","finish":"FINISH"},"bdge":{"course":"Course"},"lbl":{"tcyes":"Yes","tcno":"No","tcfrom":"From","tcto":"To","title":"Title","description":"Description","takenote":"TAKE NOTE","addnote":"ADD NOTE","mynotebook":"My Notebook","mynotes":"My Notes","search":"Search","edit":"Edit","delete":"Delete","deletenote":"Delete Note","yes":"YES","no":"NO","insertimage":"Insert Image","textbook":"Book","textbookdescription":"Build books using study material for an interesting learning experience.","course":"Course","coursedescription":"Design courses using books, collections and study material. Courses are for a duration, to achieve an objective.","lesson":"Study Material","lessondescription":"Create different study materials like story, game, activity, audio, video, using the inbuilt authoring tools.","collection":"Collection","collectiondescription":"Compile study material of your choice.","lessonplandescription":"Frame lesson plans with structured sections for an efficient learning experience.","lessonplan":"Lesson Plan","contentupload":"Upload Content","contentuploaddescription":"You can upload content here.","createlessontext":"Create Study Material","name":"Name","lessonfillater":"These details can be filled when adding content to study material.","createcollection":"Create Collection","collectionfillater":"These details can be filled when adding content to collection.","createtextbook":"Create Book","bookfillater":"These details can be filled when adding content to book.","createlessonplan":"Create Lesson Plan","lpfilllater":"These details can be filled when adding content to lesson plan.","designcourse":"Design Course","coursefilllater":"These details can be filled when adding content to create course.","author":"Author","medium":"Medium","class":"Class","subject":"Subject","lastupdate":"Last update","createdon":"Created on","status":"Status","flaggedreason":"Flagged reason","flaggedby":"Flagged by","flaggeddescription":"Flagged Description","contentinformation":"Content Information","concept":"Concepts","curriculum":"Curriculum","agreeandproceedtext":"All content created and uploaded here will be licensed under CC-BY 4.0.","deletecontent":"Delete Content","deleteconfirm":"Are you sure to delete this content?","viewworkspace":"View your workspace","resourcetype":"Resource Type","experience":"Experience","worktitle":"Occupation / Work Title","designation":"Designation","organization":"Organization","subjectstaught":"Subject(s) taught","iscurrentjob":"Is this your current job","address":"Address","seladdresstype":"Select Address Type","permanent":"Permanent","current":"Current","addressline1":"Address Line 1","addressline2":"Address Line 2","city":"City","state":"State","country":"Country","pincode":"Pin code","education":"Education","degree":"Degree","yop":"Year of passing","institute":"Institution Name","grade":"Grade","percentage":"Percentage","board":"Board/University","addlInfo":"Additional Information","email":"Email ID","phone":"Phone number","gender":"Gender","language":"Language(s) known","birthdate":"Birthdate (dd/mm/yyyy)","subjects":"Subjects of expertise","contents":"Contents","currentlocation":"Current location","grades":"Grades","socialmedia":"Social media","facebook":"Facebook","twitter":"Twitter","linkedIn":"LinkedIn","blog":"Blog","whatwentwrong":"What went wrong?","whatwentwrongdesc":"Let us know what went wrong, please mention the exact reasons so that we review this as soon as possible and address this issue super fast. Thanks for your feedback!","contentname":"CONTENT NAME","selectreason":"SELECT A REASON","share":"Share","sharelink":"Share by the link - ","batchname":"NAME OF BATCH","aboutbatch":"ABOUT THIS BATCH","startdate":"START DATE","enddate":"END DATE","natureofbatch":"NATURE OF BATCH","bacthmembers":"MEMBERS IN THE BATCH","batchmentors":"MENTORS IN THE BATCH","batchparticipants":"SELECTED PARTICIPANTS","batchselmentors":"SELECTED MENTORS","inactive":"Inactive","active":"Active","blocked":"Blocked","retired":"Retired","filters":"Filters","filterby":"Filter by","sort":"Sort","chkuploadsts":"Check Upload Status","upldfile":"Uploaded File","processid":"Process ID","provider":"Provider","extlid":"External Id","orgid":"OrgId","successres":"Success Results","failres":"Failure Results","confmblk":"Are you sure to Block  ","selrole":"Select Role","org":"Org","assgnbdge":"Assign Badge","cnfmassgn":"Do you want to assign","orgtypes":"Org Types","addorgtype":"Add Org Type","updateorgtype":"Update Org Type","confirmblock":"Are you sure to Block","confirmassign":"Do you want to assign ","jobProfile":"experience","avatar":"profile picture","profileSummary":"profile description","firstName":"first name","lastName":"last name","skillTags":"Skill Tags","addSkills":"Add Skills"},"scttl":{"todo":"To Do","myworkspace":"My Workspace","contributions":"Contributions","badges":"Badges","instructions":"Instructions :","blkuser":"Block User"},"tab":{"home":"హోమ్","courses":"కోర్సులు","resources":"లైబ్రరీ","community":"సంఘం","profile":"ప్రొఫైల్"},"drpdn":{"male":"Male","female":"Female","transgender":"Transgender"},"prmpt":{"enterphoneno":"Enter 10 digit phone number with country code","search":"Search courses, library","curriculum":"Curriculum","medium":"Medium","subject":"Subjects","grades":"Grades","contenttypes":"Content Types","concepts":"Concepts","orgtype":"Org Type","deletenote":"Are you sure to delete this note?","userlocation":"Location","roles":"Roles"},"intxt":{"t0001":"Search for notes or title","t0002":"ADD YOUR COMMENT"},"alt":{"sortby":"Sort ascending or descending order","filter":"Filter"},"instn":{"t0001":"Only upto 200 users can be uploaded with each csv file ","t0002":"Only upto 200 organizations can be uploaded with each csv file ","t0003":"'firstName', 'email', 'userName', 'password' fields are mandatory.","t0004":"If 'provider' is given, 'emailVerified' and 'phoneVerified' should be set to true. Else, they should be set to false.","t0005":"'roles', 'grade', 'language' and 'subject' can take multiple values. Sample format of list fields:  ENGLISH,HINDI .","t0006":"Date of birth ('dob') field format is YYYY-MM-DD, e.g.: 1992-10-12.","t0007":"Organization name ('orgName') is mandatory","t0008":"If the organization is a tenant (like state), then it should be marked as a root org. I.e. 'isRootOrg' should be set as true, else it should be false.","t0009":"'channel' value is required if 'isRootOrg' is true.","t0010":"'contactDetail' should be in json format . eg:[{'address':'address','phone':'xxxxxxxx','fax':'xxxxx'}].","t0011":"You can track progress with process ID","t0012":"Please save the Process ID for your reference .You can track progress with process ID","t0013":"Download the sample csv for reference.","t0014":"CSV Columns:","t0015":"Upload Organizations","t0016":"Upload Users","t0017":"'externalId' and 'provider' are mutually necessary, i.e. either both the values should be provided or not provided together.","t0018":"Flag course as inappropriate","t0019":"Flag content as inappropriate","t0020":"Start typing to add a skill"},"snav":{"start":"Create","draft":"Draft","inreview":"Review Submissions","published":"Published","alluploads":"All Uploads","upForReview":"Up For Review","flagged":"Flagged"},"pgttl":{"takeanote":"Take a note"},"lnk":{"viewall":"View All","profile":"Profile","workSpace":"Workspace","logout":"Logout","dashboard":"Admin dashboard","myactivity":"My Activity","coursebacthes":"Course Batches","imglnkmsg":"http://example.com/images/diagram.jpg optional title ",}}});

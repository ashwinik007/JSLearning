let professor = {
    name : "Prof.Gopesh Pandey",
    education : "M.Ed Phd",
    subject : "Social Science",
    college : 'S.P College',
    city : "Pune",
    degrees : {
        engineering: "CSC",
        PHD : "Adv Computing",
        MA : "Master of Arts",
        Law : "LL.B",
        Medical : "B.A.M.s",

        getdegrees: function(){
            console.log(`Teacher degrees: ${this.engineering},${this.PHD},${this.MA},${this.Law},${this.Medical}`);
        }
        
       
        },
       certificates:['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming']
    }
    
console.log(professor);
professor.degrees.getdegrees();
console.log(professor.certificates);
professor.totalExperience = "14 Years";
console.log(`${professor.totalExperience}`);
professor.certificates.push("Oracle Certified");
console.log(`${professor.certificates}`);
    
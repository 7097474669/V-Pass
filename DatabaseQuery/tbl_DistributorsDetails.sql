
CREATE TABLE [dbo].[tbl_DistributorDetails](
	[ID] [int] primary key NOT NULL,
	[MemberID] [int] NULL,
	[FirstName] [varchar](50) NULL,
	[MiddleName] [varchar](50) NULL,
	[LastName] [varchar](50)  NULL,
	Contact int ,
	Adress varchar(1000),

	[TIN No] varchar(100),
	[PAN No] varchar (50),
	[Bank IFSC Code] varchar(20),
	[Credit Limit] varchar(100),

	[EmailID] [varchar](100) NULL,
	[LoginID] [varchar](100) NULL,
	[Password] [varchar](50) NULL,
	[SecurityQuestion] [varchar](1000) NULL,
	[SecurityAnswer] [varchar](1000) NULL,

	[IsActive] [bit] NULL,
);
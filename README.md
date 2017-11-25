# Angular-2
This is Angular 2 application. It is created for basic understanding of CURD opertion.


Before running this app please change WebApi path in app/Employee/employee.service.ts file. i.e  http://localhost:60959/Api/Employee for my machine.

and please run the below SQL Script.


USE [EmployeeDB]
GO

/****** Object:  Table [dbo].[Employees]    Script Date: 24-11-2017 16:43:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employees](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[code] [nvarchar](50) NOT NULL,
	[firstName] [nvarchar](50) NULL,
	[lastName] [nvarchar](50) NULL,
	[gender] [nvarchar](50) NULL,
	[annualSalary] [decimal](18, 3) NULL,
	[dateOfBirth] [nvarchar](50) NULL,
	[primaryLanguage] [nvarchar](50) NULL,
 CONSTRAINT [PK__Employee__357D4CF89CCF0492] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


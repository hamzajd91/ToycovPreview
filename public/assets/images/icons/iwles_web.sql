-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 18, 2023 at 06:35 AM
-- Server version: 8.0.33
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iwles_web`
--

-- --------------------------------------------------------

--
-- Table structure for table `imt_user`
--

CREATE TABLE `imt_user` (
  `id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  `email` varchar(200) NOT NULL,
  `permission` varchar(100) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `address` varchar(400) NOT NULL,
  `date` date NOT NULL,
  `admin_` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imt_user`
--

INSERT INTO `imt_user` (`id`, `name`, `username`, `password`, `email`, `permission`, `mobile`, `address`, `date`, `admin_`) VALUES
(1, 'Well Logging', 'admin', '13b2fbdd5ff083c0eb84b0d502c04278', '', '', '', '', '2021-08-11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sm_contact`
--

CREATE TABLE `sm_contact` (
  `ctn_id` int NOT NULL,
  `ctn_officename` varchar(150) NOT NULL,
  `ctn_address` varchar(150) NOT NULL,
  `ctn_mail` varchar(150) NOT NULL,
  `ctn_ph` varchar(150) NOT NULL,
  `ctn_tel` varchar(150) NOT NULL,
  `ctn_map` text NOT NULL,
  `ctn_enable` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sm_contact`
--

INSERT INTO `sm_contact` (`ctn_id`, `ctn_officename`, `ctn_address`, `ctn_mail`, `ctn_ph`, `ctn_tel`, `ctn_map`, `ctn_enable`) VALUES
(1, 'Well Logging', 'Plot# 194 Street# 1, Sector, I-10/3 I 10/3 I-10, Islamabad, Islamabad Capital Territory 45000', 'info@iwles.com', '(051) 8743863', '(051) 8743863', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13284.905903602701!2d73.0438795!3d33.6512932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x750ab40a094b759b!2sWell%20Logging%20Energy!5e0!3m2!1sen!2s!4v1638957378111!5m2!1sen!2s\" width=\"100%\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sm_faqs`
--

CREATE TABLE `sm_faqs` (
  `id` int NOT NULL,
  `question` varchar(200) NOT NULL,
  `answer` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sm_faqs`
--

INSERT INTO `sm_faqs` (`id`, `question`, `answer`) VALUES
(1, 'What is virtual HR and payroll?', '<p>If you&rsquo;re a small business or startup, there are a range of HR activities you need to do, the Virtual HR team does this for you virtually. When you outsource your HR and payroll needs, then virtual HR and payroll is a simple and effective option for you. Instead of hiring multiple employees in your office, you can have access to a team of dedicated payroll and human resource specialists by using the services. Virtual HR and payroll provide exactly the same types of services you would get from a full-time, in-house payroll or HR specialist.<br />\r\nA few services offered by virtual HR:</p>\r\n\r\n<ul>\r\n	<li>Onboarding and offboarding of employees</li>\r\n	<li>Administration and implementation benefits</li>\r\n	<li>Best-practices and policy development</li>\r\n	<li>File auditing of all employees</li>\r\n	<li>Handbook development or updating</li>\r\n</ul>\r\n\r\n<p>A few services provided by virtual payroll:</p>\r\n\r\n<ul>\r\n	<li>New hire reporting</li>\r\n	<li>Complete payroll processing</li>\r\n	<li>SIF file generation</li>\r\n</ul>\r\n'),
(2, 'What are the benefits of virtual HR and payroll?', '<p>The main benefit of outsourcing your payroll and HR needs is that you don&rsquo;t have to go through all the complex processes of hiring full-time employees. Finding the right employee can take time and may also be costly. After finding the right employee, you have various continued costs that go beyond simply paying a salary to employee.<br />\r\nThere is also the time necessary for training and managing the additional employees. If you hire a virtual HR for your business, you&rsquo;ll have a skilled and dedicated professional who can provide professional payroll and human resource services without requiring direct management from you.<br />\r\nThe continued growth of any business brings with it more responsibilities. There will be times when you must make the decision to delegate specialist tasks, such as payroll and HR, allowing you to spend more time focusing on the other important aspects of your business.</p>\r\n'),
(3, 'Where&rsquo;s my data housed and  How secure is it?', '<p>Our customer data is encrypted, and all measures taken to ensure the security of your information.<br />\r\nWe use a Zero Trust model to keep your data locked down at every level, and we take multiple measures to ensure it stays that way. Here are just some of the measures we take to prevent data leaks and unauthorized data access:</p>\r\n\r\n<ul>\r\n	<li>Defense in Depth multi-level data security</li>\r\n	<li>Frequent vulnerability scans</li>\r\n	<li>Web application firewall</li>\r\n	<li>Annual penetration test</li>\r\n</ul>\r\n'),
(4, 'How customizable is Bright Minds solution?', '<p>Customizing is easy! Tailored workflows and approvals and custom access levels, email alerts are available to customers at an additional price.</p>\r\n'),
(5, 'What are the main features of Virtual HR?', '<p>We are all about information management. We make it easy to collect, maintain, and analyze your people data, so you have the time and insights you need to develop your company culture.</p>\r\n'),
(6, 'Does Bright Minds solution have time tracking?', '<p>Yes, Time Tracking is available as an add-on to your account! Employees can clock in and out or enter hours right from the ESS and timesheets are always easily available for approvals or edits.</p>\r\n'),
(7, 'Which solution does Bright Minds integrate with?', '<p>We have partnered with multiple solution providers and suggest the best solution based on your business requirements.</p>\r\n'),
(8, 'Who does Bright Minds serve?', '<p>We have solutions tailored for businesses with 5 employees to large businesses.</p>\r\n'),
(9, 'Who is my dedicated account manager?', '<p>We have an entire support team available to help you. You can call our numbers between 9 AM and 6 PM Sunday through Thursday to contact our support team.</p>\r\n'),
(10, 'How long does it take to set up the ESS Solution?', '<p>The setup would depend on historical data that is to be transferred and number of employees.</p>\r\n'),
(11, 'What is the setup process like?', '<p>Most customers choose our implementation service, in which you provide the necessary data and your assigned implementation specialist helps you import it correctly, shows you how the system works, and gets you set up and running.</p>\r\n'),
(12, 'How does Bright Minds solution help me go paperless?', '<p>The solution helps you get rid of paperwork with digital forms, cloud storage, and more!</p>\r\n'),
(13, 'How much will it cost me?', '<p>The pricing varies depending on the number of employees at your organization and the features you select. To get a free price quote, call us at the numbers provided.</p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `sm_our_team`
--

CREATE TABLE `sm_our_team` (
  `team_id` int NOT NULL,
  `team_name` varchar(50) NOT NULL,
  `team_designation` varchar(50) NOT NULL,
  `team_image` varchar(120) NOT NULL,
  `team_ed` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sm_our_team`
--

INSERT INTO `sm_our_team` (`team_id`, `team_name`, `team_designation`, `team_image`, `team_ed`) VALUES
(1, 'Muhammad Ashraf', 'CEO & Director', 'person-1.jpg', 1),
(2, 'Mr. Ali ', 'Manager', 'person-2.jpg', 1),
(3, 'Ali Ali', 'Salesman', 'person-3.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sm_page_content`
--

CREATE TABLE `sm_page_content` (
  `page_id` int NOT NULL,
  `cont_heading` varchar(100) NOT NULL,
  `page_heading` varchar(200) DEFAULT NULL,
  `page_content` text NOT NULL,
  `content_image` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sm_page_content`
--

INSERT INTO `sm_page_content` (`page_id`, `cont_heading`, `page_heading`, `page_content`, `content_image`) VALUES
(1, 'About Us', 'about_us', '<h4>Well Logging Energy Technology (Pvt.) Ltd. </h4> <span> WLE </span>  is the first and leading independent Wireline & Testing service provider in Pakistan. We value transparency, reliability, and Integrity & these principles define everything we do. Our management team has a combined 100-plus years of experience in the oil and gas industry. \r\n<br> <br>\r\nAt WLE, we offer state-of-the-art Wireline, Perforating, Surface and downhole testing fleets in the industry. We place utmost importance on exceeding our client’s prospects while remaining at the forefront of industry’s safety regulations and environmental standards, and technological advancements. We know Wireline, Perforation, and Testing Services and what it takes to earn trust in the industry. Our reputation rides on helping our customers achieve the maximum efficiencies in production through exceptional services and well-site execution. Our customers have come to count on our experience, technology and reliability. \r\n<br><br>            \r\n  We believe our value-added approach to well completions and wellbore integrity services benefit our customers and their economic returns. Our combined expertise of operations and technical approach will allow us to better serve our customers in lowering their overall well cost \r\n<br> <br>\r\n<h5>Leadership:</h5> Proven, industry-leading, entrepreneurial managers of the Oil & Gas Service industry; the perfect team to lead an “independent major”.\r\n<br><br>\r\n<h5>Culture: </h5> High standards of safety and integrity, respect for our customers and our shared environments.\r\n<br><br>\r\n<h5>Technology:</h5> Strategic partnerships with the best in market technology providers to assemble a diverse range of Wireline & Testing services, in conjunction with growing list of specialty services\r\n <br><br>', '12110Welcome.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sm_services`
--

CREATE TABLE `sm_services` (
  `ser_id` int NOT NULL,
  `ser_category` varchar(100) NOT NULL,
  `ser_name` varchar(100) NOT NULL,
  `ser_image` varchar(250) NOT NULL,
  `ser_viewimg` varchar(250) NOT NULL,
  `ser_text` text NOT NULL,
  `ser_topheading` varchar(250) NOT NULL,
  `ser_short_desc` varchar(200) NOT NULL,
  `ser_introimage` varchar(100) NOT NULL,
  `ser_url` varchar(100) NOT NULL,
  `ser_ed` int NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sm_services`
--

INSERT INTO `sm_services` (`ser_id`, `ser_category`, `ser_name`, `ser_image`, `ser_viewimg`, `ser_text`, `ser_topheading`, `ser_short_desc`, `ser_introimage`, `ser_url`, `ser_ed`) VALUES
(1, '0', '<a href=\"index.php?view=service_view&ser_id=0\"> Wireline Logging Services </a> ', 'wirelesslog.jpg', 'wirelesslog.jpg', '<div>\n<h6><strong>Solutions:</strong></h6> <ul>     <li>Production and injection performance evaluation</li>     <li>Acoustic leak detection</li>     <li>Perforation</li>     <li>Tubing and multiple casing integrity</li>     <li>Borehole seal and interval isolation</li>     <li>Water shutoff evaluation</li>     <li>Stimulation performance evaluations</li>     <li>Pipe recovery</li> </ul>\n</div>\n\n </br> \n\n <div>\n <h6><strong>Equipment and resources </strong></h6> <ul>     <li>10k, 5k and 3k pressure control equipment</li>     <li>Advance Production logging tools</li>     <li>Cement bond log/ radial bond log</li>     <li>Bridge plugs</li>     <li>Leak detection tools</li>     <li>Non-Explosive and packer setting tools</li>     <li>Non explosive Radial cutting torch</li>     <li>Tubing punctures</li>     <li>Casing tubing thickness tool</li>     <li>Cement dump bailer</li>     <li>Junk basket/ gauge ring</li>     <li>Free point indicator ( anchor/spring)</li>     <li>3/8\", 5/16\", 7/32\" and 7/32\" h2s cable </li> </ul>\n </div>     <div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal15\" src=\"assets/img/sm/sm-15.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>                                              \n', '<h6>Our fleet of logging trucks equipped with latest acquisition system, logging tools al control equipment is capable of providing a wide range of cased-hole services with clients. </h6>', '<p><strong>Solutions:</strong> <br> Production and injection performance evaluation</p>', '', '', 0),
(29, '3', '<a href=\"index.php?view=service_view&ser_id=69\">Drill Stem Testing</a>', 'well logging022.jpg', 'well logging022.jpg', '<h6><strong>DST string (Available In country) </strong></h6> <ul>     <li> 2 sets of brand new 10K DST string </li> </ul> <h6><strong>DST String includes (for both 7\" & 9 %\" ) </strong></h6> <ul>     <li>RTTS Packer • RTTS Safety joints</li>    <li>RTTS Circulating valve</li>    <li>Full bore Hydraulic Jars</li>    <li>Gauge Carrier with gauges</li>    <li>LPR-N Tester valve</li>    <li>RD Circulating valve</li>    <li>Slip Joints</li>    <li> TST valve (Flapper) for Flex strip</li>    <li>Circulating valve </li> </ul><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal14\" src=\"assets/img/sm/sm-14.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '<strong>DST string (Available In country) </strong>  <p>-2 sets of brand new 10K DST string <br><strong>DST String includes(for both 7\" & 9 %\") </strong> </p>', '', '', 0),
(3, '0', '<a href=\"index.php?view=service_view&ser_id=61\">Tubing Conveyed Perforation </a>', 'well logging011.jpg', 'well logging011.jpg', '<h6><strong>Services: </strong></h6> <ul>     <li>Perforating target zone</li>     <li>Deep penetration</li>     <li>Clean tunnels</li>     <li>Big hole</li>     <li>Shoot and pull</li>     <li>Under-balance and overbalance</li>     <li>Shoot and drop</li>     <li>Automatic release</li>     <li>Multiple sized guns </li>     <li>Tcp with completion</li>     <li> Mechanical and hydraulic activation </li> </ul> <h6><strong>Tcp equipment: </strong></h6> <ul>     <li>2 7/8 3 1/8 4 1/2 guns</li>     <li>Variety of charges (deep penetration/ clean tunnel/ big hole)</li>     <li>Hydraulic and mechanical firing head  </li>     <li>Mechanical and hydraulic drop sub </li>     <li>Automatic release sub </li>     <li>Electrical firing head</li>     </ul><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal5\" src=\"assets/img/sm/sm-5.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '', '', '', 0),
(5, '0', '<a href=\"index.php?view=service_view&ser_id=70\">Well Testing Services</a>', 'well testing.jpg', 'well testing.jpg', '<h6> <strong>well testing Equipment:</strong> </h6> <ul>     <li>Flow Head/ control Head</li>     <li>Sand trap/ Sand management</li>     <li>Choke manifold</li>     <li>ESV (emergency shut down valve)</li>     <li>Heat exchanger</li>     <li>Separator</li>     <li>Multi phase flow meter</li>     <li>Tanks</li>     <li>Transfer Pumps</li>     <li>Burners/ ignition system </li> </ul> <div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal17\" src=\"assets/img/sm/sm-17.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '<p><strong>well testing Equipment:</strong><br> - Flow Head/ control Head <br> - Sand trap/ Sand management</p>', '', '', 0),
(26, '0', 'Production Logging Services', '  well logging07.jpg', '    img2.jpg', '&lt;p&gt;Production Logging&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Suitable for the sour services&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;Key Components&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Gamma Ray,CCL&lt;/li&gt;\r\n	&lt;li&gt;Quartz Pressure, Temperature&lt;/li&gt;\r\n	&lt;li&gt;Fluid Density&lt;/li&gt;\r\n	&lt;li&gt;Water holdup(Capacitance)&lt;/li&gt;\r\n	&lt;li&gt;Dual Axis inclinometer&lt;/li&gt;\r\n	&lt;li&gt;Array Optical Gas Holdup(6 Probes)&lt;/li&gt;\r\n	&lt;li&gt;X-Y Caliper&lt;/li&gt;\r\n	&lt;li&gt;Inline Spinner&lt;/li&gt;\r\n	&lt;li&gt;Full Bore Spinner&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;Noise Losing&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Noise-Temperature Log(Leak Detection)&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;&lt;img alt=&quot;&quot; src=&quot;assets/img/sm/sm-16.jpg&quot; /&gt;&lt;/p&gt;\r\n', '', '&lt;strong&gt;Production Logging&lt;/strong&gt; &lt;p&gt;- Production Logging &lt;br&gt; &lt;strong&gt;Key Components&lt;/strong&gt;&lt;/p&gt;', '', '', 0),
(9, '0', 'Pipe Recovery', 'our_services_01.jpg', 'img10.jpg', '<h6>- Free Point indicator (Anchor / Spring)</h6> <h6>- Slim Sonic - Free point Indeication</h6> <h6>- Explosive : JRC, SS, CT, CHC</h6> <h6>- Explosive : Tubing Punchers </h6> <h6>- Non Explosive Cutter-RCT (RedKite)</h6> <ul>     <li>Tubing Cutter</li>     <li>Tubing Puncher</li>     <li>Puncher-RCT</li> </ul><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal4\" src=\"assets/img/sm/sm-4.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '<p> - Free Point indicator(Anchor/Spring) <br>- Explosive : JRC, SS, CT, CHC <br>Tubing Puncher </p>', '', '', 0),
(10, '0', 'Well Intervention', '20442service_img.jpg', '20442service_img.jpg', '<h6>- Casing Packer Setting tools</h6> <h6>- Bridge Plug Setting tool</h6> <h6>- Hydraulic Setting tools (Non Explosive)</h6> <h6>- Through tubing Setting tools</h6> <h6>- Cement Dump Bailer</h6> <h6>- Junk Basket / Gauge Ring</h6><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal7\" src=\"assets/img/sm/sm-7.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  \n                           ', '', '<p>- Casing Packer Setting tools <br> - Bridge Plug Setting tool <br>- Cement Dump Bailer</p> ', '', '', 0),
(11, '0', 'Radial Image Cement Bond Log', 'well logging06.jpg', 'img12.jpg', '<h6><strong>Cement Evaluation with Radial Image (RCBL)</strong></h6>      <h6>- Cement Bond Log with Variable Density log (CBL-VDL)</h6>     <h6>- 8 Radial Amplitude</h6>     <h6>- 8 Sector Radial Image (360° Radial Coverage) <small>Channel !dentine</small> </h6>     <h6>- Build in Borehole Temperature sensor</h6> <br>     <h6> <strong>Key Features of RCBL job Performed in Pakistan</strong> </h6>     <ul>         <li>Maximum Depth : 16440 ft (5000m)</li>         <li>Maximum Mud Weight : 16.9 ppg (2.03 g/cc)</li>         <li>Maximum BHT :332 °F (166 °C)</li>         <li>Casing size : 5\" to 9%\"</li>         <li>Maximum BHP : 14,400 psi </li>     </ul><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal3\" src=\"assets/img/sm/sm-3.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '<strong>Cement Evaluation with Radial Image (RCBL)</strong> <p>- 8 Radial Amplitude</p>', '', '', 0),
(12, '1', 'Pressure Control Equipment', 'well logging08.jpg', 'img1.jpg', '&lt;p&gt;10K Pressure Control Equipment (3 Sets)&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;suitable for the sour services&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;Key Components&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Line Wiper&lt;/li&gt;\r\n	&lt;li&gt;Grease Injection Control Head&lt;/li&gt;\r\n	&lt;li&gt;Tool Catcher(w Ball Check Valve)&lt;/li&gt;\r\n	&lt;li&gt;Lubricator&lt;/li&gt;\r\n	&lt;li&gt;Tool Trap&lt;/li&gt;\r\n	&lt;li&gt;Quick Test Sub&lt;/li&gt;\r\n	&lt;li&gt;Triple Ram Wireune Valve (BOP)&lt;/li&gt;\r\n	&lt;li&gt;Range of Well head adapter flange&lt;/li&gt;\r\n	&lt;li&gt;Pressure control skid&lt;/li&gt;\r\n	&lt;li&gt;Wellsite Pressure control test pumps&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;ul&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;3K Wireline Packoff&lt;/p&gt;\r\n\r\n&lt;p&gt;W Shooting Nipple&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;img alt=&quot;&quot; src=&quot;assets/img/sm/sm-13.jpg&quot; /&gt;&lt;/p&gt;\r\n', '', '    &lt;strong&gt;10K Pressure Control Equipment (3 Sets)&lt;/strong&gt; &lt;p&gt;- suitable for the sour services &lt;/p&gt;', '', '', 0),
(28, '3', 'Drill Stem Testing Services', 'our_services_04.jpg', 'img15.jpg', '<h6><strong>Services: </strong></h6> <ul>     <li>Zone isolation</li>     <li>Temporary completion</li>     <li>Down hole data</li>     <li>Down hole sampling</li>     <li>Stimulation</li>     <li>Frac through DST</li> </ul> <h6><strong>DST Equipment: </strong></h6> <ul>     <li>Packers</li>     <li>Safety joints</li>     <li>Jar</li>     <li>Gauge carrier</li>     <li>Tester valve</li>     <li>Down hole Sampler</li>     <li>Expansion and contraction compensating tool</li>     <li>Safety valve</li> </ul><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal14\" src=\"assets/img/sm/sm-14.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '<strong>Services: </strong> <p>- Zone isolation <br>- Temporary completion </p>', '', '', 0),
(31, '4', ' Gun System', 'our_services_05.jpg', 'img4.jpg', '<h4 style=\"font-weight:600\">Perforation  Services Gun System Include</h4> <ul> <h6 style=\"font-weight:600\">- Thru-Tubing Gun systems</h6>     <ul>         <li>Zero Phasing,</li>         <li>Bi & Tri Phasing</li>         <li>Spiral Guns</li>     </ul>         <h6 style=\"font-weight:600\">- Hollow Carrrier-Casing Perforating Gun System</h6>         <h6 style=\"font-weight:600\">- Fragmenting Gun System</h6>         <h6 style=\"font-weight:600\">- Slot Gun System</h6>           <h6 style=\"font-weight:600\">- Oriented Perforation Gun System</h6>         <h6 style=\"font-weight:600\">- Propellant Stim Gun</h6>             <h6 style=\"font-weight:600\">- Safe Firing Gun System</h6>               <h6 style=\"font-weight:600\">- Addressable IP Based Selective Gun System</h6></ul><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal5\" src=\"assets/img/sm/sm-5.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '', '', '', 0),
(32, '4', 'Shaped Charges', 'our_services_04.jpg', 'img5.jpg', '<h6><strong>Perforation gun system from</strong></h6> <h6>- DynaEnergetics — GER</h6> <h6>- Owen — USA</h6> <h6>- Geodynamics - USA</h6> <h6><strong>Perforation shaped charged </strong>types</h6> <h6>- Deep Penetrating</h6> <h6>- Reactive — DPEX</h6> <h6>- Slotted charges</h6> <h6>- Big Hole</h6> <h6>- Capsule Charges (Thru Tubing)</h6> <h6>- FRAC, HARD ROCK, Flow Optimized</h6> <h6>- Fragmentation</h6> <h6>- Debris Free Perforation Charges </h6><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal\" src=\"assets/img/sm/sm-1.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '', '', '', 0),
(30, '4', 'Ultra Deep Penetration charges', 'img21.jpg', 'img21.jpg', '<strong>WORLD RECORD - DEEPEST PENETRATION IAPTI0ISKTTOPI </strong> <h6>— 2 SS\" Casing Gun – 158 DP3 HMX </h6> <ul><small>TIP 41 t ND 033\'</small></ul> <h6> — 3%\" Casing Gun – 22.7 g DP</h6> <ul><small>TIP 41 2\' 01D 0 TV</small></ul> <h6>— 3%\" Casing Gun - 25g DP3 HMX</h6> <ul><small> PTP 56 S\' CND 040-</small></ul> <h6>— 4%\" Casing Gun – 39g DP3 HMX St</h6> <ul><small>TIP. /I 4\' HD 046\'</small></ul> <h6> – Connects further with reservoir/ Virgin Zone</h6> <ul>   <li>Increased tunnel length Best in class</li>   <li>Bypasses more damaged zone</li>   <li>Maintained charge size and weight</li>   <li>Maintained explosives amount</li> </ul><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal8\" src=\"assets/img/sm/sm-8.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '', '', '', 0),
(33, '4', 'Reactive Liner Technology ', 'img22.jpg', 'img22.jpg', '<h6>— Perforating charges inert liner components are substituted with reactive metals</h6> <h6>— After detentions, reactive metal is transferred into perforating tunnel initiating exothermic reaction</h6> <h6>— Pressure spike from exothermic reaction will initiate flow back from tunnel into borehole</h6> <h6> — Backflow will break crushed zone, transporting it out of the perforating tunnel </h6> <ul>   <li>Cleaner tunnel with increased diameter</li>   <li>Crushed zone removed</li>   <li> Elimination of Slugs in tunnel</li>   <li>Improved tunnel geometry</li>   <li>Tip fractures</li>   <li>Higher PI and lower skin</li>   <li>Negative skin possible, PI >1 </li> </ul><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal10\" src=\"assets/img/sm/sm-10.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '', '', '', 0),
(34, '4', 'Dyna Slot - New Technology', 'our_services_05.jpg', 'img7.jpg', '  <h6><strong>Vertical Channels </strong>in cemented annulus</h6>      <small>Channels cause vertical migration of fluids or gas along the outside of casing.</small><hr>      <h6><strong>Perforation/Milling </strong>to intersect unwanted channels </h6>      <small>cement sqeez creates an impermeable barrier</small><br><br>      <h6>Conventional Perforation may <strong>Miss Channels</strong> </h6>      <small>Section milling is very time consuming and expensive</small><br><br>      <h6>Fast & efficient perforation to <Strong>Intersect All Channels</Strong></h6>      <small>cement sqeez creates an impermeable barrier</small>      <small>Higher assurance of sealing vertical fluid or gas vents</small><hr>      <h6><Strong>Dyna Slot charge will ensure <strong>Complete Zonal Isolation</strong></Strong></h6>      <small>360<sup>o</sup> Helical access to the annulus between casing and/or wellbore</small>      <small>Provide access to voids in the previous cement job and formation</small><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal6\" src=\"assets/img/sm/sm-6.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>  ', '', '', '', '', 0),
(35, '4', 'Dyna Slot - Performance', 'our_services_01.jpg', 'img8.jpg', '  <h6><strong>Slotted Charge (DynaSlot) -86MM (3 <sup>3/8</sup>\" )Hollow Carrier Gun</strong></h6>   <ul> <h6>- Creates Extera Large AOF slots</h6>    <h6>- 13spm (4spf), 20<sup>o</sup> phasing, 360<sup>o</sup> coverage w 50% overlap</h6>    <h6>- Intersects all potential channels</h6>    <h6>- 2 types available</h6>    <ul>        <li>Puncher</li>        <li>Enhanced penetration</li>    </ul></ul>\n                            <div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n\n                             <img data-toggle=\"modal\" data-target=\"#exampleModal11\" src=\"assets/img/sm/sm-11.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                              </div>', '', '', '', '', 0),
(36, '4', 'Fragmenting Gun', 'our_services_06.jpg', 'img9.jpg', '<h6 style=\"marging-bottom:20px\">- Fragmented gun system  is a patented non-retrievable single use gun system designed to fragment into small pieces upon detonation. <br> (Developed with Shell)</h6> <h6 style=\"marging-bottom:20px\">- No atmospheric chamber containing the explosives</h6> <h6 style=\"marging-bottom:20px\">- No concern for gun aswell.</h6> <h6 style=\"marging-bottom:20px\">- Thru tubing applications the maximum gun size can be ran without the worry of guns being retrived back thru the tubing.</h6> <h6 style=\"marging-bottom:20px\">- Maximum explosive load can be utilized </h6> <h6 style=\"marging-bottom:20px\">- No nedd to drill extra sump since gun fragments into small pieces, ~15% of original gun length (Depending on casing and gun size)</h6> <h6 style=\"marging-bottom:20px\">- Can be adapted to any initiation system</h6><div class=\"col-md-4 col-sm-8 col-12 mt-5 p-3\">\n                            <img data-toggle=\"modal\" data-target=\"#exampleModal12\" src=\"assets/img/sm/sm-12.jpg\" class=\"img-fluid w-100 card-body-img\" alt=\"\">\n                            </div>', '', '', '', '', 0),
(0, '0', 'Formation Evaluation', '95257service_img.jpg\r\n', '95257service_img.jpg\r\n', '&lt;p&gt;WLE has a broad range of Formation Evaluation services which now cover all logging operations with the latest introduction of a whole suite of open hole logging and imaging services. We therefore, distinguish ourselves as an ideal partner for all logging needs during the life cycle of your oil and gas wells. We would be happy to discuss your wireline logging requirements and advise you of the best solutions to meet them.&lt;/p&gt;\n\n&lt;p&gt;Currently, WLE offers the following range of services:&amp;nbsp;&lt;/p&gt;\n\n&lt;ol&gt;\n	&lt;li&gt;Resistivity Imaging &amp;ndash; Array Laterlog Resistivity and Array Induction Resistivity&lt;/li&gt;\n	&lt;li&gt;Spherically Focused Resistivity&lt;/li&gt;\n	&lt;li&gt;Density and Neutron Porosity&lt;/li&gt;\n	&lt;li&gt;Gamma-Ray Spectroscopy&lt;/li&gt;\n	&lt;li&gt;Dipole (+X-Dipole) and Monopole Sonic&lt;/li&gt;\n	&lt;li&gt;Borehole Micro-Resistivity Imaging&lt;/li&gt;\n	&lt;li&gt;Formation Pressure Tester&lt;/li&gt;\n&lt;/ol&gt;\n', '', '', '', '', 1),
(54, '0', 'Reservoir Monitoring', 'graph.PNG', 'graph.PNG', '&lt;p&gt;In an era of high oil prices and rapidly depleting reservoirs, reservoir monitoring has become a vitally important tool in maximizing recovery of oil and gas. Mature wells can see rapid declines in production, the causes of which can be identified or diagnosed using suitable reservoir monitoring techniques.&lt;/p&gt;\r\n\r\n&lt;p&gt;Incorrectly produced reservoirs can quickly water-out bypassing valuable reserves forever. Produced water is an unwanted byproduct and needs to be shut of at source. Mature wells can have production problems due to cross flow, excess sand production, tubing leaks and scale. To identify these problems and others WLE uses a comprehensive range of production logging tools which can be ran in &lt;strong&gt;surface readout mode&lt;/strong&gt; on one of our electric-line trucks or in &lt;strong&gt;memory mode&lt;/strong&gt; on a third party slickline or coiled tubing unit.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;Key sensors include:&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;Casing Collar Locator &amp;ndash; A depth correlation sensor will helps indentify the exact depth of the tool string relative to the reservoir.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Gamma Ray Sensor &amp;ndash; Also used as a depth correlation sensor using the radioactive signature of the naturally occurring shale to show position in the well. The GR tool also indicates build up of radioactive scale which can choke production.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Capacitance Sensor &amp;ndash; This electrical sensor is used to measure the amount of water present in produced fluids.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Density Tool &amp;ndash; This family of tools (both radioactive and differential pressure) directly measures the density of the produced fluids and allow for the determination of the relative proportions of the oil, gas and water.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Pressure Tool &amp;ndash; This tool uses a very high resolution and accuracy quartz transducer to measure the downhole pressure. Pressure can be used to determine the ultimate extent of producible reserves in a reservoir.&lt;/p&gt;\r\n\r\n&lt;p&gt;Temperature Tool &amp;ndash; A very responsive low mass platinum resistance thermometer allows for the measurement of fluid entry and leaks as well as providing an important parameter for PVT calculations.&lt;/p&gt;\r\n\r\n&lt;p&gt;Spinners &amp;ndash; WEL can provide a vast array of spinner types capable of operating in any production environment such as bowspring fullbore spinners for barefoot completions and low pitch jeweled bearing spinners for very high flow rate gas wells.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;To complement the core sensors, the tools have a wide range of accessories such as centralizers, swivels and knuckle joints which when selected carefully can almost guarantee the tools reach logging depth efficiently and safely.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;All of these tools are available in 1 11/16&amp;rdquo; diameter and are very short to enable a quick rig up and deployment, saving the client costly non-productive time.&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Temperature rating is up to 177 Deg C&lt;/li&gt;\r\n	&lt;li&gt;Pressure rating is 15000 ps&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;A High Temp 300 Deg C and 20000 psi tool string is available. Please contact WLE info@wellloggingenergy.com more information.&lt;/p&gt;\r\n\r\n&lt;p&gt;All tools are made from NACE specification materials and are H2S resistant.&lt;/p&gt;\r\n', '', '', '', '', 1),
(56, '54', 'Advanced Reservoir Monitoring', 'advance-monetor.jpeg', 'advance-monetor.jpeg', '&lt;p&gt;Advances in well engineering and drilling have led to new well completion designs which greatly enhance reservoir drainage and production. The same completions however can provide great challenges when acquiring meaningful data. The horizontal reservoir sections associated with multilateral well completions or extended reach wells create unique and challenging flow regimes which are almost impossible to identify with a basic Production Logging Tool.&lt;/p&gt;\r\n\r\n&lt;p&gt;In vertical or low deviation wells turbulent flow patterns mean that the single point, bulk property measurements taken can be extrapolated across the entire wellbore. In high deviation and horizontal wells stratified flow regimes mean the produced fluids are segregated and single point sensors may miss key data as they are immersed in the denser water which sits on the low side of the well with the tools. Other conditions where normal sensors may miss important information is in low flow rate regimes where turbulent flow may not be consistent or in some very high flow rate wells where annular flow regimes can develop.&lt;/p&gt;\r\n\r\n&lt;p&gt;To compensate for these extreme conditions, we would recommend the deployment of &amp;ldquo;array tools&amp;rdquo; which utilize a large number of miniature sensors distributed across the wellbore. By measuring parameters at multiple points the tool is much more likely to identify any heterogeneity in the produced flow.&lt;/p&gt;\r\n\r\n&lt;p&gt;The current range of array tools include the CAT (Capacitance Array Tool) SAT (Spinner Array Tool) and RAT (Resistance Array Tool). When ran alone or in combination with other basic PLT sensor WLE&amp;nbsp;is able to generate a much more accurate flow profile and highlight key features of the downhole flow regime.&lt;/p&gt;\r\n\r\n&lt;p&gt;The tools are available in 1 11/16&amp;rdquo; diameter and can be run in memory or SRO (surface readout) modes. The tools use the Ultrawire telemetry systems and can be combined with the basic PLT sensors. Temperature and pressure ratings are 150 Deg C and 15000 psi.&lt;/p&gt;\r\n', '', '', '', '', 1),
(57, '0', 'Well Integrity', 'will-antig.PNG', 'will-antig.PNG', '&lt;p&gt;Monitoring the physical integrity of a well has become hugely more important in recent decades for a number of reasons.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Cost of drilling and completing wells has spiraled and many operators have concluded that regular &amp;ldquo;check ups&amp;rdquo; on their expensive assets will allow them to identify and possibly fix any potential problems before they become a more serious problem both in terms of HSE risk and revenue stream. The ability to actually repair casing and tubing with patches etc, without having to program a complete workover has underpinned this growth in monitoring.&lt;/p&gt;\r\n\r\n&lt;p&gt;A second driving force has been the ongoing development in EOR (Enhance Oil Recovery). Technologies such as steam injection or gas reinjection have greatly extended the operating life of many old wells way beyond there predicted life expectancy and design criteria. Monitoring of these old assets is crucial to ensure they remain functional.&lt;/p&gt;\r\n\r\n&lt;p&gt;In the asian region, cement integrity is of vital importance as it not only provides isolation for the reservoir but it also protects the sweet aquifers from potential contamination by produced fluids.&lt;/p&gt;\r\n\r\n&lt;p&gt;To confirm well integrity WLE offers the following services.&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Cement Bond logging including radial bond and cement map.&lt;/li&gt;\r\n	&lt;li&gt;Multifinger Caliper (MIT) to measure internal radii.&lt;/li&gt;\r\n	&lt;li&gt;Magnetic Thickness Tool (MTT) to measure variations in wall thickness.&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;These services are supported by several unique visualization packages which translate raw data into a valuable tool for analysis and diagnosis.&amp;nbsp;&lt;/p&gt;\r\n', '', '', '', '', 1),
(59, '57', 'Casing & Tubing Inspection', 'tubing-&-cassing.jpeg', 'tubing-&-cassing.jpeg', '&lt;p&gt;WLE casing and tubing inspection services are based on two main technologies.&lt;/p&gt;\r\n\r\n&lt;p&gt;Multifinger Caliper&lt;/p&gt;\r\n\r\n&lt;p&gt;The Sondex Multifinger Imaging System (MIT) provides high resolution detail of the condition of downhole tubulars. The Multifinger Imaging Tool has an array of hard surfaced fingers which measure very small changes in radii. A range of tool sizes with 24, 40, or 60 fingers are available to suit different casing diameters. Tool deployment can be in memory or surface readout modes.&lt;/p&gt;\r\n\r\n&lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;\r\n	&lt;tbody&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;\r\n			&lt;p&gt;&lt;strong&gt;&amp;nbsp; Tool Type&amp;nbsp;&amp;nbsp;&lt;/strong&gt;&lt;/p&gt;\r\n			&lt;/td&gt;\r\n			&lt;td&gt;\r\n			&lt;p&gt;&lt;strong&gt;&amp;nbsp; Tool OD&amp;nbsp;&amp;nbsp;&lt;/strong&gt;&lt;/p&gt;\r\n			&lt;/td&gt;\r\n			&lt;td&gt;\r\n			&lt;p&gt;&lt;strong&gt;&amp;nbsp; Min Measurement&amp;nbsp;&amp;nbsp;&lt;/strong&gt;&lt;/p&gt;\r\n			&lt;/td&gt;\r\n			&lt;td&gt;\r\n			&lt;p&gt;&lt;strong&gt;&amp;nbsp; Max Measurement&amp;nbsp;&amp;nbsp;&lt;/strong&gt;&lt;/p&gt;\r\n			&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&amp;nbsp;24 Fingers&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;1 11/16&amp;rdquo;&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;1.75&amp;rdquo;&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;4.5&amp;rdquo;&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&amp;nbsp;40 Fingers&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;2.75&amp;rdquo;&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;2.8&amp;rdquo;&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;7&amp;rdquo;&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&amp;nbsp;60 Fingers&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;3.9&amp;rdquo;&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;4&amp;rdquo;&lt;/td&gt;\r\n			&lt;td&gt;&amp;nbsp;10&amp;rdquo;&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n	&lt;/tbody&gt;\r\n&lt;/table&gt;\r\n\r\n&lt;p&gt;In situations where extremely small restrictions contrast with large diameter tubulars, finger extension kits are available to extend the range of each tool.&lt;/p&gt;\r\n\r\n&lt;p&gt;Magnetic Thickness Tool&lt;/p&gt;\r\n\r\n&lt;p&gt;The Magnetic Thickness Tool (MTT) uses 12 small magnetic sensors, mounted on the inside of a set of bowsprings to investigate tiny changes in metal thickness within downhole tubulars. An alternating magnetic wave is transmitted from the body of the tool and detected by the tiny sensors. The wave&amp;rsquo;s amplitude and velocity are changed by the thickness of the tubular and this data can be used to identify holes, thinning, wear and general corrosion. The tool has a measurement range of 2 7/8&amp;rdquo; to 7&amp;rdquo;.&lt;/p&gt;\r\n\r\n&lt;p&gt;The casing and tubing inspection tools are ran on the Ultrawire telemetry platform and can be combined with the cement evaluation tools. The tools can also be ran in memory mode.&lt;/p&gt;\r\n\r\n&lt;p&gt;Interpretation Products&lt;/p&gt;\r\n\r\n&lt;p&gt;Thickness data from the MTT is combined with MIT data using WIVA (Well Integrity Visual Analysis) software to produce powerful 3D images which literally allow the user to fly down the pipe and inspect the tubular inside and out and from all angles. Various numerical data sets can be superimposed on the image to make the interpretation easier for the end user.&lt;/p&gt;\r\n\r\n&lt;p&gt;Numerical reports in PDF format from MTT and MIT data are available using WIPER (Well Integrity Processing, Evaluation and Reporting). The package automatic detects collars and other completion hardware and then delvers a joint by joint numerical analysis of the well which can be easily tied into the completion diagram. The analysis report provides an overview highlighting the most damaged items. Graphical and tabular listings detail every joint&amp;rsquo;s metal loss and penetrations. User defined images highlight the tubular cross-section of the most damaged items.&lt;/p&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n', '', '', '', '', 1),
(60, '57', 'Cement Evaluation', '28003Radial Bond Log.jpg', 'cement-image.png', '&lt;p&gt;Cement provides wellbore stability and zonal isolation for the reservoir and a good cement job is critical for the long-term viability of a well. A poor cement job can lead to the fluid movement behind casing which may lead to reduced production, pollution of aquifers, and even hydrocarbon escape at the surface.&lt;/p&gt;\r\n\r\n&lt;p&gt;The measurement principle that assesses the quality of cement had not changed for many decades. An acoustic pulse is transmitted from the tool and is propagated along the casing and then detected by the tool receiver. The amplitude is directly proportional to the quality of the cement behind the casing with very good cement having a dampening effect on the signal.&lt;/p&gt;\r\n\r\n&lt;hr /&gt;\r\n&lt;p&gt;&lt;strong&gt;Cement Bond Log Tool (CBL-VDL)&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;The accurate evaluation of the cement bonding to a wells casing and to the formation is necessary to confirm the integrity of isolation between zones and avoid production problems.&amp;nbsp;The standard single transmitter Cement Bond Log (CBL) tool accurately determines the casing bond by measuring the amplitude of the first arrival at the 3-ft receiver. A deeper investigating 5-ft receiver confirms the interpretation and also shows a formation bond by a full Variable Density Log (VDL) wave display.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;FEATURES&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Piezoelectric crystals used in transmitters and receivers&lt;/li&gt;\r\n	&lt;li&gt;Wellbore temperature sensor&lt;/li&gt;\r\n	&lt;li&gt;450&amp;deg;F (204&amp;deg;) flasked versions available&lt;/li&gt;\r\n	&lt;li&gt;Compatible with Compensated Neutron, GR-Neutron, and CCL&lt;/li&gt;\r\n	&lt;li&gt;Can accommodate casings sizes ranging from 2-3/8 in. (60 mm) to 14 in. (356 mm)&lt;/li&gt;\r\n	&lt;li&gt;16- to 20-kHz signal&lt;/li&gt;\r\n	&lt;li&gt;Canister architecture&lt;/li&gt;\r\n	&lt;li&gt;Digital or analog communications are available&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;BENEFITS&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Optimal casing signal and data transmission&lt;/li&gt;\r\n	&lt;li&gt;Efficiently and easily maintained&lt;/li&gt;\r\n	&lt;li&gt;Real-time tool quality control&lt;/li&gt;\r\n	&lt;li&gt;Helps confirm isolation integrity between zones&lt;/li&gt;\r\n	&lt;li&gt;Avoids production problems&lt;/li&gt;\r\n	&lt;li&gt;Accurately assesses cement bond quality and hydraulic isolation&lt;/li&gt;\r\n	&lt;li&gt;Identifies top of cement&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;hr /&gt;\r\n&lt;p&gt;&lt;strong&gt;Cement Bond Ultra-Imaging Radial Logging Tool (RCBL-VDL)&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;The accurate evaluation of the cement bonding to a well&amp;rsquo;s casing and to the formation is necessary to confirm the integrity of isolation between zones and avoid production problems. The standard single transmitter Cement Bond Log (CBL) tool accurately determines the casing bond by measuring the amplitude of the first arrival at the 3-ft receiver. A deeper investigating 5-ft receiver confirms the interpretation and also shows a formation bond by a full Variable Density Log (VDL) wave display.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;FEATURES &lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Hunting&amp;rsquo;s new hybrid telemetry&lt;/li&gt;\r\n	&lt;li&gt;Easily serviced slip joint isolator bar construction&lt;/li&gt;\r\n	&lt;li&gt;Unique 1.5-ft transmitter to radial receiver spacing&lt;/li&gt;\r\n	&lt;li&gt;Identifies micro annulus and channeling&lt;/li&gt;\r\n	&lt;li&gt;Locates top of cement&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;&amp;nbsp;BENEFITS &lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;Less fast formation interference in segmented cement mapping&lt;/li&gt;\r\n	&lt;li&gt;Accurate 3-ft spacing&lt;/li&gt;\r\n	&lt;li&gt;Accurately assesses cement bond quality and hydraulic isolation&lt;/li&gt;\r\n&lt;/ul&gt;\r\n', '', '', '', '', 1),
(61, '0', 'Explosive Services', 'explosive.jpeg', 'explosive.jpeg', '&lt;p&gt;WLE is unique in Pakistan by being the first independent logging company to obtain its explosive license and subsequently offer a broad range of explosive services. Operating out of our purpose built bunker in Pakistan, WLE has performed various runs of various explosive services here in Pakistan for clients including OGDCL, PPL, Dewan Petroleum and MPCL&lt;/p&gt;\r\n\r\n&lt;ul&gt;\r\n	&lt;li&gt;WLE offers a complete range of Wireline deployed, explosive services including:&lt;/li&gt;\r\n	&lt;li&gt;Perforating with a wide range of gun systems and charge types&amp;nbsp;&lt;/li&gt;\r\n	&lt;li&gt;Advanced Perforating using state of the art deep penetrators and reactive liner charges&amp;nbsp;&lt;/li&gt;\r\n	&lt;li&gt;Cutters &amp;ndash; including the split shot, mechanical and chemical cutters&amp;nbsp;&lt;/li&gt;\r\n	&lt;li&gt;Pipe Recovery &amp;ndash;including backoff and associated freepoint services&amp;nbsp;&lt;/li&gt;\r\n	&lt;li&gt;Plugs and Packers &amp;ndash; including any commercially available plug and setting system&amp;nbsp;&lt;/li&gt;\r\n	&lt;li&gt;Propellant Fracturing using explosively detonated gas charges to fracture the reservoir&amp;nbsp;&lt;/li&gt;\r\n&lt;/ul&gt;\r\n\r\n&lt;p&gt;WLE offers one clear advantage when it comes to offering perforating and explosive services &amp;ndash; choice! Unlike the large multinational logging providers, we are not tied to in-house or proprietary technologies. We have been able to go out and source the best equipment for any particular application. We currently use products from DYNAenergetics to meet the specific needs of our customers.&lt;/p&gt;\r\n\r\n&lt;p&gt;All of our engineers have many years operational experience in perforating various types of gun system. Experience is combined with a very robust perforating and QHSE system to create a zero risk operation. On top of these operational procedures we also offer the most modern perforating technology which eliminates the chances of accidental detonation of guns.&amp;nbsp;&lt;/p&gt;\r\n', '', '', '', '', 1),
(63, '61', 'Perforating', 'perforating-removebg-preview.png', 'perforating-removebg-preview.png', '&lt;p&gt;WLE provides a wide array of charges and gun systems including the Dynaenergectic system for HSD/Scallop guns and the Dyna Shogun thru-tubing strip guns. WLE holds a large stock of charges in its Pakistan bunker for instant responsiveness on all regularly used charge sizes but can quickly secure and ship charges designed for guns from 2&amp;rdquo; to 7&amp;rdquo;.&lt;/p&gt;\r\n\r\n&lt;p&gt;The Dynaenergectic charge has quickly become the industry standard for high performance deep penetrator charges. API tested and proven, Dyna charges offer the best available penetration in almost every charge size. WLE has established a strong relationship with Dynaenergectic here in Pakistan and now the exclusive provider of services using their products within the country. \r\n\r\n&lt;p&gt;The Dyna &amp;ldquo;Shogun&amp;rdquo; perforating system is the latest technological breakthrough in thru-tubing strip-gun technology. It combines the desired radial coverage (phasing 360 Deg x 45 Deg) and high shot densities of casing guns with deep penetrating charges and retrievable strips, to maximize oil production in an efficient and cost effective way. The Shogun offers about 30% more performance than standard thru-tubing strip guns. Key features include retrievable carriers which reduce the chances of getting stuck or leaving debris in the well.&lt;/p&gt;\r\n\r\n&lt;p&gt;API Data for the Shogun System.&lt;/p&gt;\r\n\r\n&lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;width:100%&quot;&gt;\r\n	&lt;tbody&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&lt;strong&gt;Outside Diameter&lt;/strong&gt;&lt;/td&gt;\r\n			&lt;td&gt;1-11/16&amp;Prime;&lt;/td&gt;\r\n			&lt;td&gt;2-1/8&amp;Prime;&lt;/td&gt;\r\n			&lt;td&gt;2-1/2&amp;Prime;&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&lt;strong&gt;Penetration (in.)&lt;/strong&gt;&lt;/td&gt;\r\n			&lt;td&gt;16.4&lt;/td&gt;\r\n			&lt;td&gt;23.64&lt;/td&gt;\r\n			&lt;td&gt;33.33&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&lt;strong&gt;Hole Size (in.)&lt;/strong&gt;&lt;/td&gt;\r\n			&lt;td&gt;0.24&lt;/td&gt;\r\n			&lt;td&gt;0.27&lt;/td&gt;\r\n			&lt;td&gt;0.35&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&lt;strong&gt;Shot Density&lt;/strong&gt;&lt;/td&gt;\r\n			&lt;td&gt;6&lt;/td&gt;\r\n			&lt;td&gt;6&lt;/td&gt;\r\n			&lt;td&gt;4&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&lt;strong&gt;Explosive Load (G)&lt;/strong&gt;&lt;/td&gt;\r\n			&lt;td&gt;8.1&lt;/td&gt;\r\n			&lt;td&gt;14&lt;/td&gt;\r\n			&lt;td&gt;24.5&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&lt;strong&gt;Temperature Rating (&amp;deg;F)&lt;/strong&gt;&lt;/td&gt;\r\n			&lt;td&gt;375&lt;/td&gt;\r\n			&lt;td&gt;375&lt;/td&gt;\r\n			&lt;td&gt;375&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n		&lt;tr&gt;\r\n			&lt;td&gt;&lt;strong&gt;Temperature Rating (&amp;deg;C)&lt;/strong&gt;&lt;/td&gt;\r\n			&lt;td&gt;25&lt;/td&gt;\r\n			&lt;td&gt;25&lt;/td&gt;\r\n			&lt;td&gt;25&lt;/td&gt;\r\n		&lt;/tr&gt;\r\n	&lt;/tbody&gt;\r\n&lt;/table&gt;\r\n\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Regardless of how good a company&amp;rsquo;s safety systems are, there is always a risk of accidental detonation due to accidental electrical inputs. These inputs could include anything from a lightning strike to nearby radio frequency transmissions (aka your mobile phone!). To safeguard against such a detonation all WLE guns systems are offered with the DYNAenergetics safe perforating system. Electronics embedded in the detonator blocks any accidental firing and the detonator needs a digital code to be actively transmitted from surface before allowing detonation.&amp;nbsp;&lt;/p&gt;\r\n', '', '', '', '', 1),
(64, '61', 'Advanced Perforating', 'advance_pf-removebg-preview.png', 'advance_pf-removebg-preview.png', '&lt;p&gt;Our strong relationship with Geodynamics has given WLE access to some of the best explosives engineers on the planet and has allowed us to deliver some truly cutting edge technologies to our customers.&lt;/p&gt;\r\n\r\n&lt;p&gt;&lt;strong&gt;Reactive Charges:&lt;/strong&gt;&lt;/p&gt;\r\n\r\n&lt;p&gt;The Dyna reactive charge is one such technology. Using a specially designed charge liner, Dyna generates a secondary exothermic reaction within the perforation itself. This reaction momentarily generates very high temperatures which in turn create a pressure pulse pushing crushed rock and charge debris out of the perforation. This clean perforation can mean a lower skin value for the well which may in turn increase production or make hydraulic fracturing easier and more effective. By using Dyna the need to run more complicated and more expensive dynamic underbalanced perforating systems is eliminated. \r\n\r\n&lt;p&gt;Perforating is not always just about creating the biggest, deepest hole possible or packing the most amount of explosive in the smallest gun. There are times when very accurately sized and perfectly shaped holes in the tubular are much more desirable than formation penetration. An example for the use of bespoke engineered charges would be to punch very regular, fixed diameter holes in casing to act as downhole chokes for injection to ensure the right amount of fluid enters the various reservoir bodies. Bespoke charges are not significantly more expensive than standard premium charges and the delivery time is usually less than a month. Please contact WLE with your requirements &amp;ndash; &lt;a href=&quot;mailto:info@iwles.com&quot;&gt;info@iwles.com&lt;/a&gt;.&lt;/p&gt;\r\n', '', 'Our strong relationship with Geodynamics has given WLE access to some of the best explosives engineers on the planet...', '', '', 1),
(66, '61', 'Plugs & Packers', 'plugs&pakers.jpg', 'plugs&pakers.jpg', '&lt;p&gt;In complex reservoirs like those in Pakistan, the ability to selectively isolate or close individual reservoir bodies is vitally important. &amp;nbsp;Excess water production or thief zones can distinguish between a commercial and non-commercial discovery. &amp;nbsp;It is vital that the operator has a wide range of options when choosing how to manage production.&lt;/p&gt;\r\n\r\n&lt;p&gt;As an independent logging provider, we have access to any commercially available product that can be run on an electric line. We are able to supply and deploy plugs, packers, setting tools and power charges or use customer-selected and supplied products. We can also provide non-explosive products such as the through tubing inflatable bridge plugs or run other service companies&amp;#39; products as part of our third-party deployment service.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;WLE has also worked with Owen to deploy patches in some of the harshest environments in Pakistan.&amp;nbsp;&lt;/p&gt;\r\n\r\n&lt;p&gt;Please get in touch with WLE with your plug and packer requirements at &lt;a href=&quot;mailto:info@iwles.com&quot;&gt;info@iwles.com&lt;/a&gt;&lt;/p&gt;\r\n', '', 'In complex reservoirs like those in Pakistan, the ability to selectively isolate or close individual reservoir bodies is vitally important...', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sm_slider`
--

CREATE TABLE `sm_slider` (
  `sl_id` int NOT NULL,
  `sl_image` varchar(200) NOT NULL,
  `sl_mobimage` varchar(200) NOT NULL,
  `sl_url` varchar(200) NOT NULL,
  `sl_text` text NOT NULL,
  `sl_class` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sm_slider`
--

INSERT INTO `sm_slider` (`sl_id`, `sl_image`, `sl_mobimage`, `sl_url`, `sl_text`, `sl_class`) VALUES
(1, 'slide_1.png', 'm_slide_1.jpg', '', '', ''),
(3, 'slide_3.png', 'm_slide_3.jpg', '', '', ''),
(9, '49389slide_1.jpg', '12909slide_1.jpg', '', '', ''),
(12, '90447slide_31.jpg', '71453slide_31.jpg', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `imt_user`
--
ALTER TABLE `imt_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sm_contact`
--
ALTER TABLE `sm_contact`
  ADD PRIMARY KEY (`ctn_id`);

--
-- Indexes for table `sm_faqs`
--
ALTER TABLE `sm_faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sm_our_team`
--
ALTER TABLE `sm_our_team`
  ADD PRIMARY KEY (`team_id`);

--
-- Indexes for table `sm_page_content`
--
ALTER TABLE `sm_page_content`
  ADD PRIMARY KEY (`page_id`);

--
-- Indexes for table `sm_services`
--
ALTER TABLE `sm_services`
  ADD PRIMARY KEY (`ser_id`);

--
-- Indexes for table `sm_slider`
--
ALTER TABLE `sm_slider`
  ADD PRIMARY KEY (`sl_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `imt_user`
--
ALTER TABLE `imt_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sm_contact`
--
ALTER TABLE `sm_contact`
  MODIFY `ctn_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sm_faqs`
--
ALTER TABLE `sm_faqs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `sm_our_team`
--
ALTER TABLE `sm_our_team`
  MODIFY `team_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sm_page_content`
--
ALTER TABLE `sm_page_content`
  MODIFY `page_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sm_services`
--
ALTER TABLE `sm_services`
  MODIFY `ser_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `sm_slider`
--
ALTER TABLE `sm_slider`
  MODIFY `sl_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EMSWebApiService.Controllers
{
    public class EmployeeController : ApiController
    {


        // GET api/values
        //public IEnumerable<EmployeeInfo> Get()
        //{
        //    EmployeeADO employee = new EmployeeADO();
        //    return employee.GetAllData();
        //}

        //// GET api/values/5
        //public string Get(int id)
        //{
        //    return "value";
        //}


        public IEnumerable<Employee> Get()
        {
            using (EmployeeDBEntities entity = new EmployeeDBEntities())
            {
                return entity.Employees.ToList();
            }
        }

        public Employee Get(string Id)
        {
            int Eid = Convert.ToInt32(Id);
            using (EmployeeDBEntities entity = new EmployeeDBEntities())
            {
                return entity.Employees.FirstOrDefault(x => x.Id == Eid);
            }
        }

        public void Post(Employee employee)
        {
            using (EmployeeDBEntities entity = new EmployeeDBEntities())
            {
                if (employee.Id <= 0)
                {
                    entity.Employees.Add(employee);
                    entity.SaveChanges();
                }
                else
                {

                    //Employee emp = entity.Employees.Where(e => e.Id == employee.Id).FirstOrDefault<Employee>();
                    entity.Entry(employee).State = System.Data.Entity.EntityState.Modified;
                    entity.SaveChanges();
                }
            }

        }

        [HttpDelete]
        public void Delete(string Id)
        {
            int Eid = Convert.ToInt32(Id);
            using (EmployeeDBEntities entity = new EmployeeDBEntities())
            {
                Employee emp = entity.Employees.Where(e => e.Id == Eid).FirstOrDefault<Employee>();
                entity.Entry(emp).State = System.Data.Entity.EntityState.Deleted;

                entity.SaveChanges();
            }
        }

        //[HttpDelete]
        //public int Delete(int announcementId)
        //{
        //    return 1;
        //}


        public void NewDelete(string Id)
        {
            int Eid = Convert.ToInt32(Id);
            using (EmployeeDBEntities entity = new EmployeeDBEntities())
            {
                Employee emp = entity.Employees.Where(e => e.Id == Eid).FirstOrDefault<Employee>();
                entity.Entry(emp).State = System.Data.Entity.EntityState.Deleted;

                entity.SaveChanges();
            }
        }




    }
}
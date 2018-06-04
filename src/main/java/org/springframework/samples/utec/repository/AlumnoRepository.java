package org.springframework.samples.utec.repository;

import java.util.ArrayList;
import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.utec.model.Alumno;

public interface AlumnoRepository extends Repository<Alumno, Integer>{
	
<<<<<<< HEAD
	// @Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE resultado.lugar_nacimiento LIKE :dato%")
	// Collection<Alumno> filterDataNac(@Param("dato") String dato);
=======
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE alumno.carrera LIKE :dato%")
	Collection<Alumno> filterDataCar(@Param("dato") String dato);
>>>>>>> 018cd251f32ad1a3f43a193cab4e1a22c9625f95
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE resultado.enfermedad LIKE :dato%")
	Collection<Alumno> filterDataEnf(@Param("dato") String dato);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE resultado.deporte LIKE :dato%")
	Collection<Alumno> filterDataDep(@Param("dato") String dato);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE resultado.apoyos LIKE :dato%")
	Collection<Alumno> filterDataApo(@Param("dato") String dato);
	
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE alumno.carrera LIKE :dato% AND resultado.enfermedad LIKE :dato2%")
	Collection<Alumno> filterDataBy2Filtros1(@Param("dato") String dato, @Param("dato2") String dato2);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE alumno.carrera LIKE :dato% AND resultado.deporte LIKE :dato2%")
	Collection<Alumno> filterDataBy2Filtros2(@Param("dato") String dato, @Param("dato2") String dato2);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE alumno.carrera LIKE :dato% AND resultado.apoyos LIKE :dato2%")
	Collection<Alumno> filterDataBy2Filtros3(@Param("dato") String dato, @Param("dato2") String dato2);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE resultado.enfermedad LIKE :dato% AND resultado.deporte LIKE :dato2%")
	Collection<Alumno> filterDataBy2Filtros4(@Param("dato") String dato, @Param("dato2") String dato2);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE resultado.enfermedad LIKE :dato% AND resultado.apoyos LIKE :dato2%")
	Collection<Alumno> filterDataBy2Filtros5(@Param("dato") String dato, @Param("dato2") String dato2);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE resultado.deporte LIKE :dato% AND resultado.apoyos LIKE :dato2%")
	Collection<Alumno> filterDataBy2Filtros6(@Param("dato") String dato, @Param("dato2") String dato2);
	
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE alumno.carrera LIKE :dato% AND resultado.enfermedad LIKE :dato2% AND resultado.deporte LIKE :dato3%")
	Collection<Alumno> filterDataBy3Filtros1(@Param("dato") String dato, @Param("dato2") String dato2, @Param("dato3") String dato3);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE alumno.carrera LIKE :dato% AND resultado.enfermedad LIKE :dato2% AND resultado.apoyos LIKE :dato3%")
	Collection<Alumno> filterDataBy3Filtros2(@Param("dato") String dato, @Param("dato2") String dato2, @Param("dato3") String dato3);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE alumno.carrera LIKE :dato% AND resultado.deporte LIKE :dato2% AND resultado.apoyos LIKE :dato3%")
	Collection<Alumno> filterDataBy3Filtros3(@Param("dato") String dato, @Param("dato2") String dato2, @Param("dato3") String dato3);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE resultado.enfermedad LIKE :dato% AND resultado.deporte LIKE :dato2% AND resultado.apoyos LIKE :dato3%")
	Collection<Alumno> filterDataBy3Filtros4(@Param("dato") String dato, @Param("dato2") String dato2, @Param("dato3") String dato3);
	
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join alumno.res_formulario resultado WHERE alumno.carrera LIKE :car% AND resultado.enfermedad LIKE :enf% AND resultado.deporte LIKE :dep% AND resultado.apoyos LIKE :apo%")
	Collection<Alumno> filterData(@Param("car") String car, @Param("enf") String enf, @Param("dep") String dep, @Param("apo") String apo);
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno WHERE alumno.lastName LIKE :lastName%")
	Collection<Alumno> findByLastName(@Param("lastName") String lastName);

	
	@Query("SELECT alumno FROM Alumno alumno left join fetch alumno.resultados WHERE alumno.id =:id")
	Alumno findAlumnoById(@Param("id") int id);


	Collection<Alumno> findAll() throws DataAccessException;

	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join fetch alumno.grupos grupo WHERE alumno.id not in (SELECT alumno.id FROM Alumno alumno join alumno.grupos grupo WHERE grupo.id =:group) and (alumno.lastName LIKE :lastName%)")
	Collection<Alumno> findByGroup(@Param("lastName") String lastname, @Param("group") int group);

	@Query("SELECT alumno FROM Alumno alumno WHERE alumno.codigo =:codigo")
	Alumno findAlumnoByCodigo(@Param("codigo") String codigo);
	
	@Query("SELECT alumno FROM Alumno alumno WHERE alumno.lastName =:lastName")
	Alumno findAlumnoByLastnameC(@Param("lastName") String lastName);
	
	//select a.correo from alumno a inner join alumno_has_grupo pha on pha.alumno_idalumno = a.id inner join grupo g on g.id = pha.grupo_idgrupo where g.name =
	//@Query("SELECT a from Alumno a left join fetch alumno_has_grupo pha on pha.alumno_idalumno = a.id right join fetch Grupo g on g.id = pha.grupo_idgrupo where g.name =:name")
	@Query("SELECT a.correo from Alumno a left join a.grupos grupo where grupo.name =:name")
	//select a.correo from alumno a inner join alumno_has_grupo pha on pha.alumno_idalumno = a.id inner join grupo g on g.id = pha.grupo_idgrupo where g.name =:name
	ArrayList<String> findByGroupByNameCorreo(@Param("name") String name);

	@Query("SELECT alumno from Alumno alumno left join alumno.resultados resultado where resultado.test =:testName and resultado.date is null")
	Collection<Alumno> findByTestEstres(@Param("testName") String testName);
	
	@Query("SELECT a.id from Alumno a left join a.grupos grupo where grupo.name =:name")
	ArrayList<Integer> findByGroupByIdesCorreo(@Param("name") String name);
	
	@Query("SELECT alumno.id from Alumno alumno left join alumno.resultados resultado where resultado.test =:testName and resultado.date is null")
	ArrayList<Integer> findByIdAlumnoTest(@Param("testName") String testName);


	void save(Alumno alumno);


	@Transactional
	@Modifying
	@Query("DELETE Alumno alumno WHERE alumno.id =:id")
	void delete(@Param("id") int id);
	
}

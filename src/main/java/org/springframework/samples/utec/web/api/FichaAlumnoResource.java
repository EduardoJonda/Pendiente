package org.springframework.samples.utec.web.api;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.utec.model.Alumno;
import org.springframework.samples.utec.model.Res_formulario;
import org.springframework.samples.utec.service.UtecService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class FichaAlumnoResource extends AbstractResourceController {

	private final UtecService utecService; 
	
	@Autowired
	public FichaAlumnoResource(UtecService utecService) {
		 this.utecService = utecService;
	}
	
	@RequestMapping(value = "/fichaalumnoregistro", method = RequestMethod.POST)
	public RequestResFormulario guardarRegistroAlumno(@RequestBody @Valid RequestResFormulario resFormulario) {
		
		System.out.println("Imprimiendo valores"+ resFormulario);
		System.out.println("Imprimiendo valores AAAAAAAAA "+ resFormulario.getAlumno());
		
		Alumno alumno = utecService.findAlumnoById(resFormulario.getAlumno());
		
		Res_formulario res = new Res_formulario();
		alumno.addResFormulario(res);
		
	    saveResF(res, resFormulario);
		
		return resFormulario;
	}

	
	private void saveResF(Res_formulario res, RequestResFormulario resFormulario) {
		
		res.setAlergias(resFormulario.getAlergias());
		res.setApoyos(resFormulario.getApoyos());
		res.setDeporte(resFormulario.getDeporte());
		res.setEnfermedad(resFormulario.getEnfermedad());
		res.setGrado_enfermedad(resFormulario.getGrado_enfermedad());
		res.setId(resFormulario.getId());
		res.setMedicamentos(resFormulario.getMedicamentos());
		res.setNombre_contacto(resFormulario.getNombre_contacto());
		res.setParentesco_contacto(resFormulario.getParentesco_contacto());
		res.setTelefono_contacto(resFormulario.getTelefono_contacto());
		res.setTratamiento(resFormulario.getTratamiento());
		res.setRendimiento(resFormulario.getRendimiento());
		res.setGrupo_sanguineo(resFormulario.getGrupo_sanguineo());
		res.setConviviente(resFormulario.getConviviente());
		res.setTelefono_personal(resFormulario.getTelefono_personal());
		
		utecService.saveResForm(res);		
		
	}
	
	@GetMapping("/formulario/{area}/{dato}")
	public Collection<Alumno> findResultadoFormularioCollection1(@PathVariable("area") String area, @PathVariable("dato") String dato) {
		

		if(area.equalsIgnoreCase("carrera")) {
			return this.utecService.filterResultadoByCarrera(dato);
		} else if(area.equalsIgnoreCase("enfermedad")) {
			return this.utecService.filterResultadoByEnfermedad(dato);
		} else if(area.equalsIgnoreCase("deporte")) {
			return this.utecService.filterResultadoByDeporte(dato);
		} else if(area.equalsIgnoreCase("apoyo")) {
			return this.utecService.filterResultadoByApoyo(dato);
		} else {
			return null;
		}
		
	}
	
	@GetMapping("/formulario/{area}/{dato}/{area2}/{dato2}")
	public Collection<Alumno> findResultadoFormularioCollection2(@PathVariable("area") String area, @PathVariable("dato") String dato, @PathVariable("area2") String area2, @PathVariable("dato2") String dato2) {
		
		if (area.equalsIgnoreCase("carrera") && area2.equalsIgnoreCase("enfermedad")) {
			return this.utecService.filterResultadoByCarEnf(dato, dato2);
		} else if (area.equalsIgnoreCase("carrera") && area2.equalsIgnoreCase("deporte")) {
			return this.utecService.filterResultadoByCarDep(dato, dato2);
		} else if (area.equalsIgnoreCase("carrera") && area2.equalsIgnoreCase("apoyo")) {
			return this.utecService.filterResultadoByCarApo(dato, dato2);
		} else if (area.equalsIgnoreCase("enfermedad") && area2.equalsIgnoreCase("deporte")) {
			return this.utecService.filterResultadoByEnfDep(dato, dato2);
		} else if (area.equalsIgnoreCase("enfermedad") && area2.equalsIgnoreCase("apoyo")) {
			return this.utecService.filterResultadoByEnfApo(dato, dato2);
		} else if (area.equalsIgnoreCase("deporte") && area2.equalsIgnoreCase("apoyo")) {
			return this.utecService.filterResultadoByDepApo(dato, dato2);
		}
		return null;

	}
	
	@GetMapping("/formulario/{area}/{dato}/{area2}/{dato2}/{area3}/{dato3}")
	public Collection<Alumno> findResultadoFormularioCollection3(@PathVariable("area") String area, @PathVariable("dato") String dato, @PathVariable("area2") String area2, @PathVariable("dato2") String dato2, @PathVariable("area3") String area3, @PathVariable("dato3") String dato3) {
		
		if (area.equalsIgnoreCase("carrera") && area2.equalsIgnoreCase("enfermedad") && area3.equalsIgnoreCase("deporte")) {
			return this.utecService.filterResultadoByCED(dato, dato2, dato3);
		} else if (area.equalsIgnoreCase("carrera") && area2.equalsIgnoreCase("enfermedad") && area3.equalsIgnoreCase("apoyo")) {
			return this.utecService.filterResultadoByCEA(dato, dato2, dato3);
		} else if (area.equalsIgnoreCase("carrera") && area2.equalsIgnoreCase("deporte") && area3.equalsIgnoreCase("apoyo")) {
			return this.utecService.filterResultadoByCDA(dato, dato2, dato3);
		} else if (area.equalsIgnoreCase("enfermedad") && area2.equalsIgnoreCase("deporte") && area3.equalsIgnoreCase("apoyo")) {
			return this.utecService.filterResultadoByEDA(dato, dato2, dato3);
		} 
		return null;

	}
	
	@GetMapping("/formulario/datos/{carrera}/{enfermedad}/{deporte}/{apoyo}")
	public Collection<Alumno> findResultadoFormularioCollectionAll(@PathVariable("carrera") String carrera, @PathVariable("enfermedad") String enfermedad, @PathVariable("deporte") String deporte, @PathVariable("apoyo") String apoyo) {
		
		return this.utecService.filterResultadoBy(carrera, enfermedad, deporte, apoyo);
		
	}
}

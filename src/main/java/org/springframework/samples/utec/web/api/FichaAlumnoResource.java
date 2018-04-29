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
		res.setAsociacion(resFormulario.getAsociacion());
		res.setConviviente(resFormulario.getConviviente());
		res.setDeporte(resFormulario.getDeporte());
		res.setEnfermedad(resFormulario.getEnfermedad());
		res.setFederacion_deportiva(resFormulario.getFederacion_deportiva());
		res.setGrado_enfermedad(resFormulario.getGrado_enfermedad());
		res.setId(resFormulario.getId());
		res.setInstrumento_musical(resFormulario.getInstrumento_musical());
		res.setLugar_nacimiento(resFormulario.getLugar_nacimiento());
		res.setMedicamentos(resFormulario.getMedicamentos());
		res.setNombre_contacto(resFormulario.getNombre_contacto());
		res.setParentesco_contacto(resFormulario.getParentesco_contacto());
		res.setTelefono_contacto(resFormulario.getTelefono_contacto());
		res.setTiempos_libres(resFormulario.getTiempos_libres());
		res.setTratamiento(resFormulario.getTratamiento());
		res.setVivienda(resFormulario.getVivienda());
		
		utecService.saveResForm(res);		
		
	}

	@GetMapping("/formulario/{area}/{dato}")
	public Collection<Alumno> findResultadoFormularioCollection(@PathVariable("area") String area, @PathVariable("dato") String dato) {
		
		if(area.equalsIgnoreCase("lugar_nacimiento")) {
			return this.utecService.filterResultadoByNacimiento(dato);
		} else if(area.equalsIgnoreCase("enfermedad")) {
			return this.utecService.filterResultadoByEnfermedad(dato);
		} else if(area.equalsIgnoreCase("deporte")) {
			return this.utecService.filterResultadoByDeporte(dato);
		} else {
			return null;
		}
		
	}
	
}

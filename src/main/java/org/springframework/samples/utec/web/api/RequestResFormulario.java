package org.springframework.samples.utec.web.api;


public class RequestResFormulario {

	private Integer id;
	
	private int telefono_personal;

	private String nombre_contacto;

	private String parentesco_contacto;

	private int telefono_contacto;

	private String conviviente;

	private String enfermedad;

	private String grado_enfermedad;

	private String alergias;

	private String medicamentos;
	
	private String grupo_sanguineo;

	private String tratamiento;
	
	private String rendimiento;
	
	private String apoyos;

	private String deporte;
	
	private Integer alumno;
	
	public int getTelefono_personal() {
		return telefono_personal;
	}

	public void setTelefono_personal(int telefono_personal) {
		this.telefono_personal = telefono_personal;
	}

	public String getGrupo_sanguineo() {
		return grupo_sanguineo;
	}

	public void setGrupo_sanguineo(String grupo_sanguineo) {
		this.grupo_sanguineo = grupo_sanguineo;
	}

	public String getRendimiento() {
		return rendimiento;
	}

	public void setRendimiento(String rendimiento) {
		this.rendimiento = rendimiento;
	}

	public String getApoyos() {
		return apoyos;
	}

	public void setApoyos(String apoyos) {
		this.apoyos = apoyos;
	}

	public String getNombre_contacto() {
		return nombre_contacto;
	}

	public void setNombre_contacto(String nombre_contacto) {
		this.nombre_contacto = nombre_contacto;
	}

	public String getParentesco_contacto() {
		return parentesco_contacto;
	}

	public void setParentesco_contacto(String parentesco_contacto) {
		this.parentesco_contacto = parentesco_contacto;
	}

	public int getTelefono_contacto() {
		return telefono_contacto;
	}

	public void setTelefono_contacto(int telefono_contacto) {
		this.telefono_contacto = telefono_contacto;
	}

	public String getConviviente() {
		return conviviente;
	}

	public void setConviviente(String conviviente) {
		this.conviviente = conviviente;
	}

	public String getEnfermedad() {
		return enfermedad;
	}

	public void setEnfermedad(String enfermedad) {
		this.enfermedad = enfermedad;
	}

	public String getGrado_enfermedad() {
		return grado_enfermedad;
	}

	public void setGrado_enfermedad(String grado_enfermedad) {
		this.grado_enfermedad = grado_enfermedad;
	}

	public String getAlergias() {
		return alergias;
	}

	public void setAlergias(String alergias) {
		this.alergias = alergias;
	}

	public String getMedicamentos() {
		return medicamentos;
	}

	public void setMedicamentos(String medicamentos) {
		this.medicamentos = medicamentos;
	}

	public String getTratamiento() {
		return tratamiento;
	}

	public void setTratamiento(String tratamiento) {
		this.tratamiento = tratamiento;
	}

	public String getDeporte() {
		return deporte;
	}

	public void setDeporte(String deporte) {
		this.deporte = deporte;
	}

	public Integer getAlumno() {
		return alumno;
	}

	public void setAlumno(Integer alumno) {
		this.alumno = alumno;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "RequestResFormulario [id=" + id + ", telefono_personal=" + telefono_personal + ", nombre_contacto="
				+ nombre_contacto + ", parentesco_contacto=" + parentesco_contacto + ", telefono_contacto="
				+ telefono_contacto + ", conviviente=" + conviviente + ", enfermedad=" + enfermedad
				+ ", grado_enfermedad=" + grado_enfermedad + ", alergias=" + alergias + ", medicamentos=" + medicamentos
				+ ", grupo_sanguineo=" + grupo_sanguineo + ", tratamiento=" + tratamiento + ", rendimiento="
				+ rendimiento + ", apoyos=" + apoyos + ", deporte=" + deporte + ", alumno=" + alumno + "]";
	}
	
}

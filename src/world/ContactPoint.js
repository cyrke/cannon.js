/**
 * @class CANNON.ContactPoint
 * @brief A contact point between two bodies.
 * @description Should be generated by the ContactGenerator.
 * @param CANNON.Body bi
 * @param CANNON.Body bj
 * @param CANNON.Vec3 ri Optional. The vector from the center of mass of bi to the contact.
 * @param CANNON.Vec3 rj Optional. The vector from the center of mass of bj to the contact.
 * @param CANNON.Vec3 ni Optional. Contact normal vector, pointing out of body bi.
 */
CANNON.ContactPoint = function(bi,bj,ri,rj,ni){    
    /**
     * @property CANNON.Vec3 ri
     * @memberof CANNON.ContactPoint
     */
    this.ri = new CANNON.Vec3();

    /**
     * @property CANNON.Vec3 rj
     * @memberof CANNON.ContactPoint
     */
    this.rj = new CANNON.Vec3();

    /**
     * @property CANNON.Vec3 ni
     * @memberof CANNON.ContactPoint
     */
    this.ni = new CANNON.Vec3();
    
    // Copy over data if arguments were passed
    if(ri) ri.copy(this.ri);
    if(rj) rj.copy(this.rj);
    if(ni) ni.copy(this.ni);
    
    /**
     * @property CANNON.Body bi
     * @memberof CANNON.ContactPoint
     */
    this.bi = bi;

    /**
     * @property CANNON.Body bj
     * @memberof CANNON.ContactPoint
     */
    this.bj = bj;
};